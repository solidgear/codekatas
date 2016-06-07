class TeleCoffeeHandler {
    // This class handles orders for teleco's breakfast

    // Initialize the handler to connect with the DB.
    // initORMHandler is a function in this class that is not included 
    // cause it is not in the scope of this kata.
    let mORMHandler = initORMHandler()

    // Initialize the handler to connect with the payment system
    // initWalletHandler is a function in this class that is not included 
    // cause it is not in the scope of this kata.
    let mWalletHandler = initWalletHandler()

    func getBravasUnit() -> myORMObject {
        mORMHandler.checkEnoughExistences('bravas', 1)
        let bravasPrize = mORMHandler.getPrize('bravas')
        mWalletHandler.checkEnoughMoney(bravasPrize)
        mWalletHandler.spendMoney(bravasPrize)
        return mORMHandler.get('bravas', 1)
    }

    func getBravasPack() -> myORMObject {
        mORMHandler.checkEnoughExistences('bravas', 5)
        let bravasPrize = mORMHandler.getPrize('bravas')
        mWalletHandler.checkEnoughMoney(bravasPrize * 5)
        mWalletHandler.spendMoney(bravasPrize * 5)
        return mORMHandler.get('bravas', 5)
    }

    func getPechuguitoUnit() -> myORMObject {
        mORMHandler.checkEnoughExistences('pechuguito', 1)
        let pechuguitoPrize = mORMHandler.getPrize('pechuguito')
        mWalletHandler.checkEnoughMoney(pechuguitoPrize)
        mWalletHandler.spendMoney(pechuguitoPrize)
        return mORMHandler.get('pechuguito', 1)
    }

    func getPechuguitoPack() -> myORMObject {
        mORMHandler.checkEnoughExistences('pechuguito', 5)
        let pechuguitoPrize = mORMHandler.getPrize('pechuguito')
        mWalletHandler.checkEnoughMoney(pechuguitoPrize * 5)
        mWalletHandler.spendMoney(pechuguitoPrize * 5)
        return mORMHandler.get('pechuguito', 5)
    }
}