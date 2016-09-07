
/*
* Singleton pattern for retrieving a map of authenticated tokens and their user in the system.
* The first time it is called it creates the instance; after that it always return the same object.
* e.g of what it may have:
*     {
*         'bad5asf6af68asf6': 'user1',
*         'sdfsadf6786fsff8': 'user2',
*         'adsgsdg68sdg8sf0': 'user3',
*     }
*/
function getAuthenticatedTokens(request) {
    // authTokens is a global variable
    if (authTokens === null) {
        // first time this is called, then create the instance
        authTokens = {};
    }
    // return the global variable
    return authTokens;
}



/*
* This function is called when we do authentication with a POST request
* like  POST /authentication with user and password as params, which are
* the information given in a login page.
*/
function authenticate(request) {
    try {
        // gets username and password from the request
        var user = request.params.user;
        var password = request.param.password;

        // checks whether that user and password are in database
        // checkUserAndPasswordInDatabase will return false when they are not in DB
        // or user/or are not valid (null, empty...)
        if (!checkUserAndPasswordInDatabase(user, password)) {
            // user and password was not OK, send 401 status code as response
            sendStatus(401, 'unauthorized');
            return;
        }

        // generates a random token for that user
        var token = generateRandomToken(user);

        // registers the token and user in the authenticated tokens singleton variable
        // (the language used for this passes objects as reference, so it should work )
        var authenticatedTokens = getAuthenticatedTokens(request);
        authenticatedTokens[token] = user;
        
        // logs the user access in a file (server.log) located in the available filesystem
        writeLog('User ' + user + ' logged in');

        //sends a json with the token (status code sent is 200)
        sendJson(200, {'token', token});
    } catch (error) {
        // logs the error
        writeLog('ERROR: while authenticating: ' + error);
        // an unexpected error happened (status code sent is 500)
        sendStatus(500, 'server error');
    }
}

/*
* This function is called to retrieve the informationof the user with the token given
* in the request header
* like  GET /users/me with token in the headers
*/
function whoAmI(request) {
    try {
        // gets the token from the header header
        var token = request.headers.token;

        // gets the singleton object with the tokens already authenticated
        var authenticatedTokens = getAuthenticatedTokens(request);
        
        // checks if the token is valid (if it is in the map)
        var user = authenticatedTokens[token];
        if (!user) {
            // user is not an object, hence token is not valid (send status code 401)
            sendStatus(401, 'unauthorized');
            return;
        }

        // everything was ok, so a json with the username is sent back (status code 200)
        sendJson(200, {'user': user});
    } catch (error) {
        // logs the error
        writeLog('ERROR: while getting user name: ' + error);
        // an unexpected error happened (status code sent is 500)
        sendStatus(500, 'server error');
    }
}

