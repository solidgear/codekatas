function ActionManager() {
    this.actionQueue = new ActionQueue(); //FIFO queue
}

function performActions() {
    var pulseSecureVpn = new PulseSecureVpnActionOperation();
    this.actionQueue.addOperation(pulseSecureVpn);
}