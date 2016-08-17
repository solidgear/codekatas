class Engineer {
    var androidExpert: Bool
    var iosExpert: Bool
    var frontendExpert: Bool
    var backendExpert: Bool
    
    init(androidExpert:Bool, iosExpert:Bool, frontendExpert:Bool, backendExpert:Bool) {
        self.androidExpert = androidExpert;
        self.iosExpert = iosExpert;
        self.frontendExpert = frontendExpert;
        self.backendExpert = backendExpert;
    }
}

let percentageAsignedAndroid = 0.2;
let percentageAsignedIos = 0.25;
let percentageAsignedFrontend = 0.2;
let percentageAsignedBackend = 0.2;

func distributeEngineersInProjects(engineers: [Engineer]) -> [Engineer] {
    // TO-DO
}