func getMyObject() -> AnyObject {
    // This function returns a proper object 99.9% of the time
    ...
}

func main() {
    var myVar = getMyObject()
    if myVar == nil {
        // We have to check the var because 0.01% of the time it fails
        return
    }
    else {
        doSomething(myVar)
    }
}
