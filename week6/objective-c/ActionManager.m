// This is a FIFO queue
@property (readonly) NSOperationQueue *actionQueue;

- (id)init {
    self = [super init];
    if (self) {
		self.actionQueue = [[NSOperationQueue alloc] init];
    }
    return self;
}

- (void) performActions:(NSMutableArray *)actionsArray {
    // ...
    // actionQueue starts execution as soon as actions are enqueued
    // It executes main method from action
    PulseSecureVpnActionOperation* pulseSecureVpn = [[PulseSecureVpnActionOperation alloc]init];
    [self.actionQueue addOperation:pulseSecureVpn];
    // ...
}