- (void)main {
    // Registers appHasConnectedToPulseSecureVpn as a handler for kPulseSecureVpnConnectedNotification
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(appHasConnectedToPulseSecureVpn)
                                                 name:kPulseSecureVpnConnectedNotification
                                               object:nil];
    
    self.pulseSecureVpnManager = [[PulseSecureVpnManager alloc] init];
    [self.pulseSecureVpnManager connectProxy];
}

- (void) appHasConnectedToPulseSecureVpn {
    // Done!
    [self finish];
    return;
}