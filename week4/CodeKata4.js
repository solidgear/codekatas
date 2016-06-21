"use strict";

class Developer {
    constructor() {
        this.technologies = ["Visual Basic", "C", "Javascript"];
        this.backendIDE = "Web Storm";
        this.mobileIDE = "Sublime Text";
    }

    eatPizza() {
    return "Yummy!";
    }

    lookForAnExcuse() {
        return "It worked in my local machine";
    }

    doAGreatBackend() {
        return "I think i can do it";
    }

    doAGreatApp() {
        return "Well.. I'll try something hybrid";
    }

    getTechnologies() {
        return this.technologies;
    }

    getIDES() {
        return this.backendIDE + ' and ' + this.mobileIDE;
    }

}

class IosDeveloper extends Developer {
    constructor() {
        super();
        this.technologies = ["Objective C", "Swift"];
        this.mobileIDE = "XCode";
    }

    lookForAnExcuse() {
        return "Your device is old, buy a new one";
    }

    doAGreatBackend() {
        throw ("I don't do that kind of things");
    }

    doAGreatApp() {
        return "An awesome swift app is coming...";
    }
}

class AndroidDeveloper extends Developer {
    constructor() {
        super();
        this.technologies = ["Android", "Java"];
        this.mobileIDE = "Android studio";
    }

    lookForAnExcuse() {
        return "I tested it in an Android 4.2.2, not in a 4.2.1";
    }

    doAGreatBackend() {
        throw ("Back..what?");
    }

    doAGreatApp() {
        return "With material design and firebase integration!";
    }

}