this.handlers = [];

function PulseSecureVpnManager(handler) {
    this.handlers.push(handler);
}

this.libPulseSecureHandle = null;

function connectProxy() {
    var wrapper = new AFWrapper();
    this.libPulseSecureHandle = wrapper.getLibPulseSecure();

    if (this.libPulseSecureHandle != NULL) {
        var startProxy = dlsym(libPulseSecureHandle, "startProxy");
        startProxy();
        // Connected!
        this.handlers.forEach(function(handler) {
            handler(); //launch event
        });
    }
}
