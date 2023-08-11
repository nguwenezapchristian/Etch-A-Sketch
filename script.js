const grids = document.querySelector("#container");
const btn = document.querySelector("#btn");
const userInput = document.querySelector("#user-input");

btn.addEventListener('click', () => {
    let num = parseInt(userInput.value);
    grids.innerHTML = '';
    createGrids(num);
});

function createGrids(num) {

    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.className = 'div-row';
        grids.appendChild(row);

        for (let a = 0; a < num; a++)
        {
            const column = document.createElement('div');
            column.className = 'div-column';
            row.appendChild(column);
            column.addEventListener('mouseover', () => {
                column.style.background = randomColor();
            })
        }
    }
}
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 6);
        const randomLetter = letters[randomIndex];
        color += randomLetter; 
    }
    return color;
}

