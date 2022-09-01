function createTable() {
    var playgraundTable = document.createElement("TABLE");
    playgraundTable.setAttribute("id", "myTable");
    document.getElementsByClassName("container")[0].appendChild(playgraundTable);

    /* создаем таблицу 10х10 */
    for (let i = 0; i < 10; i++) {
        var playgraundTableRows = document.createElement("TR");
        playgraundTableRows.setAttribute("id", "myTr" + i);
        document.getElementById("myTable").appendChild(playgraundTableRows);

        for (let i = 0; i < 10; i++) {
            var playgraundTableCols = document.createElement("TD");
            playgraundTableRows.appendChild(playgraundTableCols);
        }
    }

    /* задаем каждой ячейке индивидуальный Id */
    for (let i = 0; i < 100; i++) {
        var cell = document.getElementsByTagName('TD')[i];
        cell.setAttribute('id', i);
        cell.setAttribute('onclick', 'usersСellSelection(this.id)');
    }
}

var randomNumbers = Array.from({length: 10}, () => Math.floor(Math.random() * 99));
console.log(randomNumbers);

function usersСellSelection(clicked_id) {

    var cellId = parseInt(clicked_id);
    var cellToHighlight = document.getElementById(cellId);

    for (var i = 0; i < randomNumbers.length; i++) 
    {
        if (randomNumbers[i] === cellId) {    
            cellToHighlight.setAttribute('class', 'green');
            break;
        
        } else {
            cellToHighlight.setAttribute('class', 'red');
        }
    }
}