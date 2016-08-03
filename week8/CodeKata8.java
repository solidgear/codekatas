public interface QADevOpsInterface {
    public String doAnApp();
    public String runSomeDockers();
    public String validateTestPlans();
    public String makeNewProject(); 
}

public class QADevOps implements QADevOpsInterface{
    public QADevOps() {
    }

    public String doAnApp() {
        return "Done!";
    }

    public String runSomeDockers() {
        return "Done!";
    }

    public String validateTestPlans() {
        return "Done";
    }

    public String makeNewProject() {
        doAnApp();
        runSomeDockers();
        validateTestPlans();
        return "Keep calm and wait for benefits";
    }
}
