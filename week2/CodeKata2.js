function TeleCoffeeHandler() {
    // This class handles orders for teleco's breakfast

    // Initialize the handler to connect with the DB.
    // initORMHandler is a function in this class that is not included 
    // cause it is not in the scope of this kata.
    var mORMHandler = initORMHandler();

    // Initialize the handler to connect with the payment system
    // initWalletHandler is a function in this class that is not included 
    // cause it is not in the scope of this kata.
    var mWalletHandler = initWalletHandler();

    this.getBravasUnit = function() {
        mORMHandler.checkEnoughExistences('bravas', 1);
        var bravasPrize = mORMHandler.getPrize('bravas');
        mWalletHandler.checkEnoughMoney(bravasPrize);
        mWalletHandler.spendMoney(bravasPrize);
        return mORMHandler.get('bravas', 1);
    }

    this.getBravasPack = function() {
        mORMHandler.checkEnoughExistences('bravas', 5);
        var bravasPrize = mORMHandler.getPrize('bravas');
        mWalletHandler.checkEnoughMoney(bravasPrize * 5);
        mWalletHandler.spendMoney(bravasPrize * 5);
        return mORMHandler.get('bravas', 5);
    }

    this.getPechuguitoUnit = function() {
        mORMHandler.checkEnoughExistences('pechuguito', 1);
        var pechuguitoPrize = mORMHandler.getPrize('pechuguito');
        mWalletHandler.checkEnoughMoney(pechuguitoPrize);
        mWalletHandler.spendMoney(pechuguitoPrize);
        return mORMHandler.get('pechuguito', 1);
    }

    this.getPechuguitoPack = function() {
        mORMHandler.checkEnoughExistences('pechuguito', 5);
        var pechuguitoPrize = mORMHandler.getPrize('pechuguito');
        mWalletHandler.checkEnoughMoney(pechuguitoPrize * 5);
        mWalletHandler.spendMoney(pechuguitoPrize * 5);
        return mORMHandler.get('pechuguito', 5);
    }
}