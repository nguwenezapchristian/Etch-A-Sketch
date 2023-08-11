const grids = document.querySelector("#container");
function createGrids() {
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.id = 'div-row';
    grids.appendChild(row);
    for (let a = 0; a < 16; a++)
    {
        const column = document.createElement('div');
        column.id = 'div-column';
        row.appendChild(column);
    }
}
}
createGrids();