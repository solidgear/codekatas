def getMyObject():
    // This function returns a proper object 99.9% of the time
    ...

def main():
    myVar = getMyObject();
    if myVar is None:
        // We have to check the var because 0.01% of the time it fails
        return;
    else:
        doSomething(myVar);