window.onload = (event) => {
    const container = document.querySelector('#container');
    let columnsAndRows = 16;

    function createGrid(n) {
        container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
        container.style.justifyItems = "stretch";
        container.style.AlignItems = "stretch";
    }

    function createDivs(n) {
        for(i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                let div = document.createElement('div');
                div.classList.add('one-unit');
                container.appendChild(div);
            }
        }
    }

    createGrid(columnsAndRows);
    createDivs(columnsAndRows);

    let [...allDivs] = document.querySelectorAll('.one-unit');

    function changeColor(e){
        e.target.style.background = "blue";
    }

    allDivs.forEach(div => div.addEventListener('mouseover', changeColor));

    function reset() {
        container.innerHTML = "";
        let squares = prompt("how many squares per side to make the new grid", "16");
        columnsAndRows = parseInt(squares);
        createGrid(columnsAndRows);
        createDivs(columnsAndRows);
        [...allDivs] = document.querySelectorAll('.one-unit');
        allDivs.forEach(div => div.addEventListener('mouseover', changeColor));
    }

    function clear() {
        container.innerHTML = "";
        createGrid(columnsAndRows);
        createDivs(columnsAndRows);
        [...allDivs] = document.querySelectorAll('.one-unit');
        allDivs.forEach(div => div.addEventListener('mouseover', changeColor));
    }
    
    let clearBtn = document.querySelector('#clear-reset');
    clearBtn.addEventListener('click', clear);

    let changeGridBtn = document.querySelector('#change-grid');
    changeGridBtn.addEventListener('click', reset);

    function randomChange(e) {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        e.target.style.background = `rgb(${red},${green},${blue})`;
    }

    function randomBackground() {
        clear();
        allDivs.forEach(div => div.removeEventListener('mouseover', changeColor));
        allDivs.forEach(div => div.addEventListener('mouseover', randomChange));
    }

    let randomChangeBtn = document.querySelector('#random-color');
    randomChangeBtn.addEventListener('click', randomBackground);

    function variableChange(e) {
        e.target.style.background = "red";
        if(!e.target.style.opacity) {
            e.target.style.opacity = "0.1";
        }

        else if(Number(e.target.style.opacity) >= 0.1 && Number(e.target.style.opacity) < 1) {
            let num = Number(e.target.style.opacity);
            num = (num * 10 + 1) / 10;
            console.log(num);
            e.target.style.opacity = `${num}`;
        }
    }

    function variableBackground() {
        clear();
        allDivs.forEach(div => div.removeEventListener('mouseover', changeColor));
        allDivs.forEach(div => div.removeEventListener('mouseover', randomChange));
        allDivs.forEach(div => div.addEventListener('mouseover', variableChange));
    }

    let variableChangeBtn = document.querySelector('#variable-color');
    variableChangeBtn.addEventListener('click', variableBackground);


};