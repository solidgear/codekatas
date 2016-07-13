static void* libPulseSecureHandle;

- (void*) getLibPulseSecure {
    return libPulseSecureHandle;
}

+ (void*) loadDylib:(NSString*)path {
    // returns pointer to dylib
}

// This is the entry point for the wrapper
// This method is executed at the very beginning of the app lifecycle
+ (void)load {
    // Loading PulseSecure...
    ActionManager *actionManager = [[ActionManager alloc] init];
    
    if (floor(NSFoundationVersionNumber) <= NSFoundationVersionNumber_iOS_7_1) {
        // PulseSecure is only compatible with iOS8+ QUITTING THE APP...
        QuitActionOperation* quitter = [[QuitActionOperation alloc] init];
        [[actionManager actionQueue] addOperation:quitter];
        return;
    }

    libPulseSecureHandle = [AFWrapper loadDylib:@"/PulseSecure.dylib"];

    PolicyManager *policyManager = [[PolicyManager alloc] init];
    [policyManager fetchPolicies];
}