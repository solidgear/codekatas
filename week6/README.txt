The purpose of this kata is to refactor the code included in the 5 files provided and get a better managed and more efficient object interaction.

In these files you will find the basic and reduced EASE Wrapper flow.

The flow can be summarized in the following lines:

AFWrapper - load
    |
PolicyManager
    |
ActionManager - actionQueue <- policy-action
    |
ActionOperation (PulseSecureVPN)
    |
ActionManager (PulseSecureVPN) - performs action(s)

AFWrapper is loaded and, as part of it, it loads an external library (PulseSecure) needed to execute the action associated to the policy.
The policies are managed through an action queue which executes actions as soon as they are enqueued.
QuitAction can be added to the queue at some point if the OS is not compatible and should be executed before other policies have been applied.
PulseSecureVpnManager uses external library previously loaded within AFWrapper.