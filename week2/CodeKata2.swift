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

    func getPechugitoUnit() -> myORMObject {
        mORMHandler.checkEnoughExistences('pechugito', 1)
        let pechugitoPrize = mORMHandler.getPrize('pechugito')
        mWalletHandler.checkEnoughMoney(pechugitoPrize)
        mWalletHandler.spendMoney(pechugitoPrize)
        return mORMHandler.get('pechugito', 1)
    }

    func getPechugitoPack() -> myORMObject {
        mORMHandler.checkEnoughExistences('pechugito', 5)
        let pechugitoPrize = mORMHandler.getPrize('pechugito')
        mWalletHandler.checkEnoughMoney(pechugitoPrize * 5)
        mWalletHandler.spendMoney(pechugitoPrize * 5)
        return mORMHandler.get('pechugito', 5)
    }
}