function createTable() {
    console.log('hemlo');
    var playgraundTable = document.createElement("TABLE");
    playgraundTable.setAttribute("id", "myTable");
    document.getElementsByClassName("container")[0].appendChild(playgraundTable);

    for (let i = 0; i < 10; i++) {
        var playgraundTableRows = document.createElement("TR");
        playgraundTableRows.setAttribute("id", "myTr" + i);
        document.getElementById("myTable").appendChild(playgraundTableRows);

        for (let i = 0; i < 10; i++) {
            var playgraundTableCols = document.createElement("TD");
            playgraundTableCols.setAttribute('id', 'MyTd' + i)
            playgraundTableRows.appendChild(playgraundTableCols);
        }
    }

}