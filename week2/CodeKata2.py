class TeleCoffeHandler:
    # This class handles orders for teleco's breakfast

    def __init__(self):
        # Initialize the handler to connect with the DB.
        # initORMHandler is a function in this class that is not included 
        # cause it is not in the scope of this kata.
        self.mORMHandler = initORMHandler()

        # Initialize the handler to connect with the payment system
        # initWalletHandler is a function in this class that is not included 
        # cause it is not in the scope of this kata.
        self.mWalletHandler = initWalletHandler()

    def getBravasUnit():
        self.mORMHandler.checkEnoughExistences('bravas', 1)
        bravasPrize = self.mORMHandler.getPrize('bravas')
        self.mWalletHandler.checkEnoughMoney(bravasPrize)
        self.mWalletHandler.spendMoney(bravasPrize)
        return self.mORMHandler.get('bravas', 1)

    def getBravasPack():
        self.mORMHandler.checkEnoughExistences('bravas', 5)
        bravasPrize = self.mORMHandler.getPrize('bravas')
        self.mWalletHandler.checkEnoughMoney(bravasPrize * 5)
        self.mWalletHandler.spendMoney(bravasPrize * 5)
        return self.mORMHandler.get('bravas', 5)

    def getPechuguitoUnit():
        self.mORMHandler.checkEnoughExistences('pechuguito', 1)
        pechuguitoPrize = self.mORMHandler.getPrize('pechuguito')
        self.mWalletHandler.checkEnoughMoney(pechuguitoPrize)
        self.mWalletHandler.spendMoney(pechuguitoPrize)
        return self.mORMHandler.get('pechuguito', 1)

    def getPechuguitoPack():
        self.mORMHandler.checkEnoughExistences('pechuguito', 5)
        pechuguitoPrize = self.mORMHandler.getPrize('pechuguito')
        self.mWalletHandler.checkEnoughMoney(pechuguitoPrize * 5)
        self.mWalletHandler.spendMoney(pechuguitoPrize * 5)
        return self.mORMHandler.get('pechuguito', 5)