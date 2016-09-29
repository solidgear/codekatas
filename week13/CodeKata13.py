class Mouth:
    def speech(self):
        return "HELLO HELLO"

class Lung:
    def inhaleAir(self):
        return "Air inhaled"
    def exhaleAir(self):
        return "Air exhaled"

class Feet:
    def step(self):
        return "Step"

class Person:
    def __init__(self):
        self.myMouth = Mouth()
        self.myLung = Lung()
        self.myFeet = Feet()

    def talk (self):
        return self.myMouth.speech()
    def breath (self):
        message = self.myLung.inhaleAir();
        return message + " " + self.myLung.exhaleAir()
    def walk (self):
        message = "";
        for i in range (0,10):
            message = message + " " + self.myFeet.step()
        return message

class TestPerson:
    def __init__(self):
        self.person = Person()

    def test (self):
        if (self.person.talk() != "HELLO HELLO"):
            print "Test failed!"
        if (self.person.breath() != "Air inhaled Air exhaled"):
            print "Test failed!"
        if (self.person.walk() != " Step Step Step Step Step Step Step Step Step Step"):
            print "Test failed!"

test = TestPerson()
test.test()
