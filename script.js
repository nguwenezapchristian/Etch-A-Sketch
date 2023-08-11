const grids = document.querySelector("#container");
const btn = document.querySelector("#btn");
const userInput = document.querySelector("#user-input");

btn.addEventListener('click', () => {
    let num = parseInt(userInput.value);
    createGrids(num);
});

function createGrids(num) {
    grids.innerHTML = '';
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.id = 'div-row';
        grids.appendChild(row);
        for (let a = 0; a < num; a++)
        {
            const column = document.createElement('div');
            column.id = 'div-column';
            row.appendChild(column);
            column.addEventListener('mouseover', () => {
                column.style.background = 'black';
            })
        }
    }
}

