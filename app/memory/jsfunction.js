/**
 * Created by Eloy on 3-5-2017.
 */

id = 0;
function initGame(boardsize){
    createArray(boardsize);
    fillField(boardsize);
    var newGameButton = document.getElementById('opnieuw');
    newGameButton.addEventListener('click', newGame, false);
}

function fillField(size){
    var speelveld = document.getElementById('speelveld');
    for(var i=0;i<size;i++){
        var trElement = document.createElement("tr");
        for(var j=0;j<size;j++) {
            addCard.call(trElement);
        }
        speelveld.appendChild(trElement);
    }
    id = 0;
}

function addCard(){
    var tdElement = document.createElement("td");
    var node = document.createTextNode("*");
    id++;
    tdElement.id=id;
    tdElement.appendChild(node);
    tdElement.className='inactive';
    tdElement.addEventListener('click', cardClicked, false);
    this.appendChild(tdElement);
}

function cardClicked(){
    this.className=setColor('td.active');
}

function newGame(){
    var boardsize = document.getElementById('size');
    initGame(boardsize);
    console.log("nieuw spel");
}

function setColor(color){
    color = color.substring(3);
    return color;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function createArray(size){
    var index = 0;
    var letters = 'AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ'.substring(0, size*size).split("");
    letters = shuffle(letters);
    return function(){
        var letter = letters[index++];

        return letter;
    }
}
