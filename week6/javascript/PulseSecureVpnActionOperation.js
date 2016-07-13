function main() {
    var appHasConnectedToPulseSecureVpn = function() {
        // Done!
        return;
    }

    // Registers appHasConnectedToPulseSecureVpn as a handler for kPulseSecureVpnConnectedNotification
    var pulseSecureVpnManager = new PulseSecureVpnManager(appHasConnectedToPulseSecureVpn);
    pulseSecureVpnManager.connectProxy();
}