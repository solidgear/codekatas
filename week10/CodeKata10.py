class Engineer:
    def __init__(self, androidExpert, iosExpert, frontendExpert, backendExpert):
        self.androidExpert = androidExpert
        self.iosExpert = iosExpert
        self.frontendExpert = frontendExpert
        self.backendExpert = backendExpert

PERCENTAGE_ASSIGNED_ANDROID = 0.2;
PERCENTAGE_ASSIGNED_IOS = 0.25;
PERCENTAGE_ASSIGNED_FRONTEND = 0.2;
PERCENTAGE_ASSIGNED_BACKEND = 0.2;

def distributeEngineersInProjects(engineers):
    #TO-DO