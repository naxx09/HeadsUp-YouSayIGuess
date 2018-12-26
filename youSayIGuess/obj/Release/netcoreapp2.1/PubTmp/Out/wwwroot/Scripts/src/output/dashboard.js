function plusScore(row) {
    let table = document.getElementById("tbDashboard");
    let i = row.parentNode.parentNode.rowIndex;
    let input = table.rows[i].getElementsByTagName("input")[0];
    if (input.value === "") {
        input.value = "1";
    } else {
        let score = parseInt(input.value, 10);
        input.value = score + 1;
    }
}
function minusScore(row) {
    let table = document.getElementById("tbDashboard");
    let i = row.parentNode.parentNode.rowIndex;
    let input = table.rows[i].getElementsByTagName("input")[0];
    if (input.value !== "") {
        let score = parseInt(input.value, 10);
        if (score > 1)
            input.value = score - 1;
        else
            input.value = 0;
    }
}
function deleteRow(row) {
    let table = document.getElementById("tbDashboard");
    let i = row.parentNode.parentNode.rowIndex;
    if (table.rows[i].cells[0].innerHTML !== "Group 1")
        table.deleteRow(i);
}
function addRow() {
    let table = document.getElementById("tbDashboard");
    let newRow = table.rows[1].cloneNode(true);
    let len = table.rows.length;
    newRow.cells[0].innerHTML = "Group " + len;
    let input = newRow.cells[1].getElementsByTagName("input")[0];
    input.id = "txtGroup" + len + "Score";
    input.value = "";
    table.appendChild(newRow);
}
window.onload = function () {
    let i=0;
    while (i < 14) {
        addRow();
        i++;
    }
}