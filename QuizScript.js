/**
 * Created by Jake on 2/21/2015.
 */
var db;
var version = 1.0;
var dbName = "NclexPrep";
var dbDisplayName = "nclex_prep_db";
var dbSize = 2 * 1024 * 1024;
try
{
    db = openDatabase(dbName, version, dbDisplayName, dbSize, function(database)
    {
        alert("database creation callback");
    });
}
catch(e)
{

}

function QuizPageStart()
{
    if(db)
    {
        //LoadQuestion();

        //db.transaction(function (tx) {
        //    tx.executeSql('Select QuestionText From Questions where QuestionID = 1', [], LoadQuestion);
        //});

    }
}

//function LoadQuestion()
//{
//    db.transaction(function(t)
//    {
//        t.executeSql("CREATE TABLE Questions (QuestionID INTEGER PRIMARY KEY, QuestionText TEXT)",
//            [], function (sqlTransaction, sqlResultSet) {
//                alert("Table has been created.");
//            }, function (sqlTransaction, sqlError) {
//                /* Error handling */
//            });
//    });
//
//    db.transaction(function(t)
//    {
//        "Insert into Questions(QuestionID, QuestionText) Values(1,'This is the Question'"
//    }, function()
//    {
//        alert("SQL statements were executed successfully.");
//    });
//}