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

var start = 99;
var randomNumbersArray = [];
while (start >= 0) {
    randomNumbersArray.push(start--);
}

function shuffle(randomNumbersArray) {
    let currentIndex = randomNumbersArray.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [
            randomNumbersArray[currentIndex],
            randomNumbersArray[randomIndex]
        ] = [
            randomNumbersArray[randomIndex],
            randomNumbersArray[currentIndex]
        ];
    }

    return randomNumbersArray;
}

shuffle(randomNumbersArray);
randomNumbersArray = randomNumbersArray.slice(0, 10); 
console.log(randomNumbersArray);

function usersСellSelection(clicked_id) {

    var cellId = parseInt(clicked_id);
    var cellToHighlight = document.getElementById(cellId);

    for (var i = 0; i < randomNumbersArray.length; i++) {
        if (randomNumbersArray[i] === cellId) {
            cellToHighlight.setAttribute('class', 'green');
            break;

        } else {
            cellToHighlight.setAttribute('class', 'red');
        }
    }
}