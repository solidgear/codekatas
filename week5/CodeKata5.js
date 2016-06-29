// Initialize the class that handles the GUI to draw things.
// It is done this way to abstract the problem from the way that
// the UI works, as it is not in the scope
var myGUI = initGUI();

// Initialize the handler to connect with the DB.
// initORMHandler is a function in this class that is not included 
// cause it is not in the scope of this kata.
var mORMHandler = initORMHandler();

function renderSchedule() {
    myGUI.setColumnsHeaders("LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO");

    myGUI.setColumnColor(1, "grey");
    myGUI.setColumnColor(2, "grey");
    myGUI.setColumnColor(3, "grey");
    myGUI.setColumnColor(4, "grey");
    myGUI.setColumnColor(5, "grey");
    myGUI.setColumnColor(6, "yellow");
    myGUI.setColumnColor(7, "yellow");

    var infolunes = mORMHandler.getDayData("tablelunes");
    myGUI.setColumnData(1, infolunes);

    var infomartes = mORMHandler.getDayData("tablemartes");
    myGUI.setColumnData(2, infomartes);

    var infomiercoles = mORMHandler.getDayData("tablemiercoles");
    myGUI.setColumnData(3, infomiercoles);

    var infojueves = mORMHandler.getDayData("tablejueves");
    myGUI.setColumnData(4, infojueves);

    var infoviernes = mORMHandler.getDayData("tableviernes");
    myGUI.setColumnData(5, infoviernes);

    var infosabado = mORMHandler.getDayData("tablesabado");
    myGUI.setColumnData(6, infosabado);

    var infodomingo = mORMHandler.getDayData("tabledomingo");
    myGUI.setColumnData(7, infodomingo);
}