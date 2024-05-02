const main = document.querySelector('.game_zone');
const playBtn = document.querySelector('#play')

const levelSelected = document.querySelector('#level');

const levels = [100, 81, 49]
let numberSquare;


playBtn.addEventListener('click', play);


// ----- Function ----- //

function play(){
  numberSquare = levels[levelSelected.value]
  reset();
  generatePlayGrid();
 
}

function generatePlayGrid(){
  const grid = document.createElement('div');
  grid.classList.add('grid')

  for(let i = 0; i < numberSquare; i++) {
    const square = createSquare(i);
    grid.append(square)
  }

  main.append(grid)
}

function createSquare(index){
  const square =  document.createElement('div');
  square.className = 'square';
  square.classList.add('square' + numberSquare);
  square._squareID = index;
  square.addEventListener('click', hendlerClickSquare)

  return square;
}

function hendlerClickSquare(){
  this.classList.add('clicked');
}

function reset(){
  main.innerHTML = ''; 
}

