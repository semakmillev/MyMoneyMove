var Places = {
    addPlace: function () {

    }
}

var sqlPlaces = "CREATE TABLE IF NOT EXISTS PLACE("+
    "_ID INTEGER primary key NOT NULL  UNIQUE, "+
    "NAME)";

function InitDb2()
{
    DropCreateTable("PLACE",sqlPlaces);
}