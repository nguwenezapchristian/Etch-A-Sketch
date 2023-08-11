const div = document.querySelector("#container");
function createGrids() {
for (let i = 0; i < 16; i++) {
    const grids = document.createElement('div');
    grids.id = 'div-row';
    grids.style.cssText = 'color: blue; background-color: red';
    div.appendChild(grids);
    for (let a = 0; a < 16; a++)
    {
        const column = document.createElement('div');
        column.id = 'div-column';
        column.textContent = 'B';
        column.style.cssText = 'color: pink; background-color: yellow';
        grids.appendChild(column);
    }
}
}
createGrids();