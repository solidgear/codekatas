class Developer {
    var technologies: [String]
    var backendIDE: String
    var mobileIDE: String

    init() {
        technologies = ["Visual Basic", "C", "Javascript"]
        backendIDE = "Web Storm"
        mobileIDE = "Sublime Text"
    }

    func eatPizza() -> String {
        return "Yummy!"
    }

    func lookForAnExcuse() -> String {
        return "It worked in my local machine"
    }

    func doAGreatBackend() -> String {
        return "I think i can do it"
    }

    func doAGreatApp() -> String{
        return "Well.. I'll try something hybrid"
    }

    func getTechnologies() -> [String] {
        return this.technologies
    }

    func getIDES() -> String {
        return this.backendIDE + ' and ' + this.mobileIDE
    }

}

class IosDeveloper: Developer {
    override init() {
        super.init()
        technologies = ["Objective C", "Swift"]
        mobileIDE = "XCode"
    }

    override func lookForAnExcuse() -> String {
        return "Your device is old, buy a new one"
    }

    override func doAGreatBackend() throws -> String {
        throw Exception("I don't do that kind of things")
    }

    override func doAGreatApp() -> String {
        return "An awesome swift app is coming..."
    }
}

class AndroidDeveloper: Developer {
    override init() {
        super.init();
        technologies = ["Android", "Java"]
        mobileIDE = "Android studio"
    }

    override func lookForAnExcuse() -> String {
        return "I tested it in an Android 4.2.2, not in a 4.2.1"
    }

    override func doAGreatBackend() throws -> String {
        throw Exception("Back..what?")
    }

    override func doAGreatApp() -> String {
        return "With material design and firebase integration!"
    }

}