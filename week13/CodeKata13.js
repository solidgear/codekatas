var Mouth = function () {
};
Mouth.prototype.speech = function() {
    return "HELLO HELLO";
};

var Lung = function () {
};
Lung.prototype.inhaleAir = function () {
    return "Air inhaled";
};
Lung.prototype.exhaleAir = function () {
    return "Air exhaled";
};

var Feet = function () {

};
Feet.prototype.step = function () {
    return "Step";
};

var Person = function () {
    this.myMouth = new Mouth();
    this.myLung = new Lung();
    this.myFeet = new Feet();
};

Person.prototype.talk = function() {
    return this.myMouth.speech();
};
Person.prototype.breath = function() {
    var message = this.myLung.inhaleAir();
    return message + " " + this.myLung.exhaleAir();
};
Person.prototype.walk = function() {
    var message = "";
    for (var i=0; i<10; i++) {
        message = message + " " + this.myFeet.step();
    }
    return message;
};

var TestPerson = function () {
    this.person = new Person();
};
TestPerson.prototype.test = function() {
    if (this.person.talk() !== "HELLO HELLO") {
        console.log("Test failed!");
    }
    if (this.person.breath() !== "Air inhaled Air exhaled") {
        console.log("Test failed!");
    }
    if (this.person.walk() !== " Step Step Step Step Step Step Step Step Step Step") {
        console.log("Test failed!");
    }
};

test = new TestPerson();
test.test();