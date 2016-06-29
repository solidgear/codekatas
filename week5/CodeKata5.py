class Schedule:
    # This class handles info of a weekly scheudle

    def __init__(self):
        # Initialize the class that handles the GUI to draw things.
        # It is done this way to abstract the problem from the way that
        # the UI works, as it is not in the scope of this kata.
        self.myGUI = initGUI()

        # Initialize the handler to connect with the DB.
        # initORMHandler is a function in this class that is not included
        # cause it is not in the scope of this kata.
        self.mORMHandler = initORMHandler()

    def renderSchedule(self):
        self.myGUI.setColumnsHeaders("LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO")

        self.myGUI.setColumnColor(1, "grey")
        self.myGUI.setColumnColor(2, "grey")
        self.myGUI.setColumnColor(3, "grey")
        self.myGUI.setColumnColor(4, "grey")
        self.myGUI.setColumnColor(5, "grey")
        self.myGUI.setColumnColor(6, "yellow")
        self.myGUI.setColumnColor(7, "yellow")

        infolunes = self.mORMHandler.getDayData("tablelunes")
        self.myGUI.setColumnData(1, infolunes)

        infomartes = mORMHandler.getDayData("tablemartes")
        self.myGUI.setColumnData(2, infomartes)

        infomiercoles = mORMHandler.getDayData("tablemiercoles")
        self.myGUI.setColumnData(3, infomiercoles)

        infojueves = mORMHandler.getDayData("tablejueves")
        self.myGUI.setColumnData(4, infojueves)

        infoviernes = mORMHandler.getDayData("tableviernes")
        self.myGUI.setColumnData(5, infoviernes)

        infosabado = mORMHandler.getDayData("tablesabado")
        self.myGUI.setColumnData(6, infosabado)

        infodomingo = mORMHandler.getDayData("tabledomingo")
        self.myGUI.setColumnData(7, infodomingo)