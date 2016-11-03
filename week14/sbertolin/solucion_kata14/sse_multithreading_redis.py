from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin
from flask_sse import sse
import threading
import redis
import time

app = Flask(__name__)
app.config["REDIS_URL"] = "redis://localhost"
app.register_blueprint(sse, url_prefix='/stream')
cors = CORS(app, resources={r"/*": {"origins": "*"}})

POOL = redis.ConnectionPool(host='127.0.0.1', port=6379, db=0)

def get_variable(variable_name):
    my_server = redis.Redis(connection_pool=POOL)
    response = my_server.get(variable_name)
    return response

def set_variable(variable_name, variable_value):
    my_server = redis.Redis(connection_pool=POOL)
    my_server.set(variable_name, variable_value)

def check_stock_key():
    with app.app_context():
        r = redis.StrictRedis()
        pubsub = r.pubsub()
        pubsub.psubscribe('__keyspace@*:stock*')
        for msg in pubsub.listen():
            sse.publish({"message": str(int(get_variable("stock")))}, type='variable')
            print(str(time.time()) + str(msg))

check_stock_thread = threading.Thread(target=check_stock_key, args=())
check_stock_thread.start()

@app.route('/stock')
def publish_hello():
    currentStock = str(int((get_variable("stock"))))
    #return render_template("get_stock.html", currentStock=currentStock)
    return jsonify(currentStock)
