protocol QADevOpsProtocol {
    static func doAnApp() -> String
    static func runSomeDockers() -> String
    public func validateTestPlans() -> String
    public func makeNewProject() -> String
}

class QADevOps: QADevOpsProtocol {
    func doAnApp() -> String {
        return "Done!"
    }

    func runSomeDockers() -> String {
        return "Done!"
    }

    func validateTestPlans() -> String {
        return "Done!"
    }

    func makeNewProject() -> String {
        doAnApp()
        runSomeDockers()
        validateTestPlans()
        return "Keep calm and wait for benefits"
    }
}
