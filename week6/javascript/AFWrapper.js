this.libPulseSecureHandle = null;

function getLibPulseSecure() {
    return libPulseSecureHandle;
}

function loadDylib(path) {
    // returns pointer to dylib
}

// This is the entry point for the wrapper
// This method is executed at the very beginning of the app lifecycle
function load() {
    // Loading PulseSecure...
    var actionManager = new ActionManager();
    
    if (iOSVersionNumber <= 7) {
        // PulseSecure is only compatible with iOS8+ QUITTING THE APP...
        var quitter = new QuitActionOperation();
        actionManager.actionQueue.addOperation(quitter);
        return;
    }

    libPulseSecureHandle = this.loadDylib("/PulseSecure.dylib");

    var policyManager = new PolicyManager();
    policyManager.fetchPolicies();
}