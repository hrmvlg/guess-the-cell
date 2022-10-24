function createTable() {
    var playgraundTable = document.createElement("TABLE");
    playgraundTable.setAttribute("id", "myTable");
    document.getElementsByClassName("container")[0].appendChild(playgraundTable);

    /* создаем таблицу 10х10 */
    for (let i = 0; i < 10; i++) {
        var playgraundTableRows = document.createElement("TR");
        playgraundTableRows.setAttribute("id","myTr" + i);
        document.getElementById("myTable").appendChild(playgraundTableRows);

        for (let i = 0; i < 10; i++) {
            var playgraundTableCols = document.createElement("TD");
            playgraundTableRows.appendChild(playgraundTableCols);
        }
    }
    
    /* задаем каждой ячейке индивидуальный Id и добавляем атрибуты функций*/
    for (let i = 0; i < 100; i++) {
            var cell = document.getElementsByTagName('TD')[i];
            cell.setAttribute('id', i);
        }
}

function setCellsAttribute() {
    for (let i = 0; i < 100; i++) {
        var cell = document.getElementsByTagName('TD')[i];
        cell.setAttribute('onclick', 'usersСellSelection(this.id)');
        //cell.setAttribute('onmouseover', 'usersСellSelection(this.id)');
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

/* перекрашиваем ячейки таблицы при нажатии */
function usersСellSelection(clicked_id) {
    var cellId = parseInt(clicked_id);
    var cellToHighlight = document.getElementById(cellId);
    for (var i = 0; i < randomNumbersArray.length; i++) {
        if (cellToHighlight.classList.contains('green')) break;
        else if (randomNumbersArray[i] === cellId) {
            cellToHighlight.setAttribute('class', 'green');
            Win();
        } else {
            cellToHighlight.setAttribute('class', 'red');
        }
    }
}

var counter = 0;
let win = false;
function Win() {
    counter++;
    if (counter == 10) {
        win = true;
    }
}

let startBtn = document.querySelector('#start');
let displayTimer = document.querySelector('.displayTimer');
startBtn.addEventListener('click', function() {
    let i = 60;
    startBtn.disabled = true;
    let timerId = setInterval(function () {
        displayTimer.textContent = --i;
        setCellsAttribute();
        if(win == true){
            alert("Победа! Вы успели найти все ячейки!");
            whenTimeerStops(timerId);
        }
        if (i == 0 && win == false) {
            alert('Вы проиграли! :(');
            whenTimeerStops(timerId);
        }
    }, 1000);
});

function whenTimeerStops(timerId) {
    clearInterval(timerId);
    startBtn.disabled = false;
    displayTimer.textContent = '';
    counter = 0;    
    location.reload();
}