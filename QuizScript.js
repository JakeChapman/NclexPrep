/**
 * Created by Jake on 2/21/2015.
 */
var xhr = new XMLHttpRequest();
xhr.open('GET', '')
var db = window.openDatabase('db.sqlite', '1.0', 'NclexPrep', 1024 * 1024);

function QuizPageStart()
{
    db.transaction(function(tx)
    {
        tx.executeSql('Select QuestionText From Questions where QuestionID = 1',[],
        function(tx, results)
        {
            document.getElementById("QuestionText").innerText = "Gets Here";//results.rows.item(0).valueOf();
        })
    });
}

