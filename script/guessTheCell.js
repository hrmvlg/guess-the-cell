function createTable() {
    console.log('hemlo');
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
    for(let i = 0; i < 100; i++){
        var tddd = document.getElementsByTagName('TD')[i];
        tddd.setAttribute('id', 'cell' + i); 
    }
}