class Developer:

    def __init__(self):
        self.technologies = ["Visual Basic", "C", "Javascript"]
        self.backendIDE = "Web Storm"
        self.mobileIDE = "Sublime Text"

    def eatPizza(self):
        return "Yummy!"

    def lookForAnExcuse(self):
        return "It worked in my local machine"

    def doAGreatBackend(self):
        return "I think i can do it"

    def doAGreatApp(self):
        return "Well.. I'll try something hybrid"

    def getTechnologies(self):
        return self.technologies

    def getIDES(self):
        return self.backendIDE + ' and ' + self.mobileIDE

class IosDeveloper(Developer):

    def __init__(self):
        self.technologies = ["Objective C", "Swift"]
        self.mobileIDE = "XCode"

    def lookForAnExcuse(self):
        return "Your device is old, buy a new one"

    def doAGreatBackend(self):
        raise Exception("I don't do that kind of things")

    def doAGreatApp(self):
        return "An awesome swift app is coming..."

class AndroidDeveloper(Developer):

    def __init__(self):
        self.technologies = ["Android", "Java"]
        self.mobileIDE = "Android studio"

    def lookForAnExcuse(self):
        return "I tested it in an Android 4.2.2, not in a 4.2.1"

    def doAGreatBackend(self):
        raise Exception("Back..what?")

    def doAGreatApp(self):
        return "With material design and firebase integration!"