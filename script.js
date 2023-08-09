const div = document.querySelector("#container");
function createGrids() {
for (let i = 0; i < 16; i++) {
    const grids = document.createElement('div');
    grids.style.cssText = 'color: blue; background-color: red';
    div.appendChild(grids);
    for (let a = 0; a < 16; a++) {
        const grids = document.createElement('div');
        grids.style.cssText = 'color: yellow; background-color: red';
        div.appendChild(grids);
    }
}
}
createGrids();