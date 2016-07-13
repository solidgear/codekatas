static void* libPulseSecureHandle;
static void (*startProxy)();

- (void) connectProxy{
    AFWrapper *wrapper = [[AFWrapper alloc] init];
    libPulseSecureHandle = [wrapper getLibPulseSecure];

    if (libPulseSecureHandle != NULL) {
        startProxy = dlsym(libPulseSecureHandle, "startProxy");
        if (startProxy != NULL)  {
            startProxy();
            // Connected!
            // Launch kPulseSecureVpnConnectedNotification notification
            [[NSNotificationCenter defaultCenter] postNotificationName:kPulseSecureVpnConnectedNotification object:self userInfo:nil];
        }
    }
}