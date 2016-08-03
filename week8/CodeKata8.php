interface QADevOpsInterface
{
    public function doAnApp();
    public function runSomeDockers();
    public function validateTestPlans();
    public function makeNewProject(); 

}

class QADevOps implements QADevOpsInterface
{
    public function doAnApp() {
        return "Done!";
    }

    public function runSomeDockers() {
        return "Done!";
    }

    public function validateTestPlans() {
        return "Done";
    }

    public function makeNewProject() {
        $this->doAnApp();
        $this->runSomeDockers();
        $this->validateTestPlans();
        return "Keep calm and wait for benefits";
    }
}