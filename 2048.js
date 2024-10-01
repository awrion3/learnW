/*onload*/
window.onload = function () {
  setGame();
};

/*variable*/
var board;
var score = 0;
var rows = 4;
var columns = 4;

/*set game*/
function setGame() {
  board = [
    [0, 0, 0, 0], //row 0 column 0~3
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div"); //create <div id = "0-0"></div> Element
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num); //update the tile Element state
      document.getElementById("board").append(tile);
    }
  }

  setTwo(); //create 2s to start the game
  setTwo();
}
/*update tile*/
function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = ""; //clear the classList (ex: tile x2 x4..)

  tile.classList.add("tile"); //add new classList
  if (num > 0) {
    tile.innerText = num.toString();
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add("x8192"); //same style over tile x8192
    }
  }
}

/*key press*/
document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowLeft") {
    slideLeft();
    setTwo(); //add new tiles each time
  } else if (e.code == "ArrowRight") {
    slideRight();
    setTwo();
  } else if (e.code == "ArrowUp") {
    slideUp();
    setTwo();
  } else if (e.code == "ArrowDown") {
    slideDown();
    setTwo();
  }
  document.getElementById("score").innerText = score; //update the score each time
});

/*zero filter*/
function filterZero(row) {
  return row.filter((num) => num != 0); //create new array of all nums != 0
}
/*slide sum*/
function slide(row) {
  //[0, 2, 2, 2] -> [2, 2, 2]
  row = filterZero(row);
  //[2, 2, 2] -> [4, 0, 2]
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  }
  //[4, 0, 2] -> [4, 2]
  row = filterZero(row);

  //add Zeroes again to empty tiles
  while (row.length < columns) {
    row.push(0);
  } //[4, 2, 0, 0]

  return row;
}

/*four directions*/
//slideLeft
function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row = slide(row); //
    board[r] = row;

    //apply the slide result to the document
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}
//reverse of slideLeft
function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r]; //[0, 2, 2, 2]
    row.reverse(); //[2, 2, 2, 0]
    row = slide(row); //[4, 2, 0, 0]
    board[r] = row.reverse(); //[0, 0, 2, 4]

    //apply the slide result to the document
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}
//slideUp
function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]]; //transform column into row
    row = slide(row);

    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r]; //apply to the original column position
      //board[0][c] = row[0]; //board[1][c] = row[1]; //board[2][c] = row[2]; //board[3][c] = row[3];

      //apply the slide result to the document
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}
//reverse of slideUp
function slideDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse(); //reverse
    row = slide(row);
    row.reverse(); //reverse back

    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r]; //apply to the original column position

      //apply the slide result to the document
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

/*game setup*/
function setTwo() {
  if (!hasEmptyTile()) {
    alert("🎮Game Over...! or Try Again?🕹️");
    return;
  } //break out of the function

  let found = false;
  while (!found) {
    //find random row & column to fill a 2 in
    let r = Math.floor(Math.random() * rows); //0 <= x < 1 * 4 (0 <= val < 4 & get rids of decimal)
    let c = Math.floor(Math.random() * columns);
    //fill random empty tiles with a 2
    if (board[r][c] == 0) {
      board[r][c] = 2;

      //update the tile state
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      tile.innerText = "2";
      tile.classList.add("x2");

      found = true; //end while loop
    }
  }
}
/*tile check*/
function hasEmptyTile() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] == 0) {
        return true; //at least one zero in the board
      }
    }
  }
  return false; //if not, false
}