/**
 * Created by Eloy on 3-5-2017.
 */
function initGame(boardsize){
    createArray(boardsize);
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
    console.log(letters);
    return function(){
        var letter = letters[index++];
        return letter;
    }
}
