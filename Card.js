const cards = ["clubs_ace.png","clubs_2.png","clubs_3.png","clubs_4.png","clubs_5.png","clubs_6.png","clubs_7.png","clubs_8.png","clubs_9.png","clubs_10.png",
    "clubs_jack.png","clubs_king.png","clubs_queen.png","diamonds_ace.png", "diamonds_2.png", "diamonds_3.png", "diamonds_4.png", "diamonds_5.png", "diamonds_6.png", 
    "diamonds_7.png", "diamonds_8.png", "diamonds_9.png", "diamonds_10.png", "diamonds_jack.png", "diamonds_king.png", "diamonds_queen.png",
    "hearts_ace.png", "hearts_2.png", "hearts_3.png", "hearts_4.png", "hearts_5.png", "hearts_6.png", "hearts_7.png", "hearts_8.png", "hearts_9.png", "hearts_10.png",
    "hearts_jack.png", "hearts_king.png", "hearts_queen.png","spades_ace.png", "spades_2.png", "spades_3.png", "spades_4.png", "spades_5.png", "spades_6.png", "spades_7.png",
    "spades_8.png", "spades_9.png", "spades_10.png", "spades_jack.png", "spades_king.png", "spades_queen.png"];

var count = 0;
var indexes = [];
var card1value;
var card2value;
var card3value;
var card4value;
var card5value;
var randomIndex3;
var isGameStarted = false;
function draw(){
    var card1 = document.getElementById('mycard1');
    var card2 = document.getElementById('mycard2');
    var card3 = document.getElementById('mycard3');
    var card4 = document.getElementById('mycard4');
    var card5 = document.getElementById('mycard5');
    var croupier1 = document.getElementById('croupier1');
    
    function getUniqueRandomIndex() {
        var randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cards.length);
        } while (indexes.includes(randomIndex));
    return randomIndex;}

    if(count != 0){
        if(count == 1){
            randomIndex4 = getUniqueRandomIndex();
            card3.src = "Cards/" + cards[randomIndex4];
            indexes.push(randomIndex4);
            card3.style.visibility = "visible";
            count ++;
            setTimeout(function () {
                card3value = ((randomIndex4 + 1) % 13);
                if (card1value === 1) {
                    card1value = 11;
                }
                if (card2value === 1) {
                    card2value = 11;
                }
                if (card3value === 1) {
                    card3value = 11;
                } else if (card3value > 10 || card3value === 0) {
                    card3value = 10;
                }
                if (card1value + card2value + card3value > 21) {
                    if (card1value === 11) {
                        card1value = 1;
                    }
                    if (card2value === 11) {
                        card2value = 1;
                    }
                    if (card3value === 11) {
                        card3value = 1;
                    }
                    if (card1value + card2value + card3value === 21) {
                        alert("You Won");
                    }
                    else if(card1value + card2value + card3value> 21){
                        alert("You Lost");
                    }
                }
                else if(card1value + card2value + card3value === 21) {
                    alert("You Won");
                }
                
            }, 1000);
            
        }
        else if(count == 2){
            randomIndex5 = getUniqueRandomIndex();
            card4.src = "Cards/" + cards[randomIndex5];
            indexes.push(randomIndex5);
            card4.style.visibility = "visible";
            count ++;
            setTimeout(function () {
                card4value = ((randomIndex5 + 1) % 13);
                if (card1value === 1) {
                    card1value = 11;
                }
                if (card2value === 1) {
                    card2value = 11;
                }
                if (card3value === 1) {
                    card3value = 11;
                }
                if (card4value === 1) {
                    card4value = 11;
                } else if (card4value > 10 || card4value === 0) {
                    card4value = 10;
                }
                if (card1value + card2value + card3value + card4value> 21) {
                    if (card1value === 11) {
                        card1value = 1;
                    }
                    if (card2value === 11) {
                        card2value = 1;
                    }
                    if (card3value === 11) {
                        card3value = 1;
                    }
                    if (card4value === 11) {
                        card4value = 1;
                    }
                    if (card1value + card2value + card3value + card4value === 21) {
                        alert("You Won");
                    }
                    else if(card1value + card2value + card3value + card4value> 21){
                        alert("You Lost");
                    }
                } 
                else if(card1value + card2value + card3value + card4value === 21) {
                    alert("You Won");
                }
                
            }, 1000);
        }
        else if(count == 3){
            randomIndex6 = getUniqueRandomIndex();
            card5.src = "Cards/" + cards[randomIndex6];
            indexes.push(randomIndex6);
            card5.style.visibility = "visible";
            count ++;
            setTimeout(function () {
                card5value = ((randomIndex6 + 1) % 13);
                if (card1value === 1) {
                    card1value = 11;
                }
                if (card2value === 1) {
                    card2value = 11;
                }
                if (card3value === 1) {
                    card3value = 11;
                }
                if (card4value === 1) {
                    card4value = 11;
                }
                if (card5value === 1) {
                    card5value = 11;
                } else if (card5value > 10 || card5value === 0) {
                    card5value = 10;
                }
                if (card1value + card2value + card3value + card4value + card5value> 21) {
                    if (card1value === 11) {
                        card1value = 1;
                    }
                    if (card2value === 11) {
                        card2value = 1;
                    }
                    if (card3value === 11) {
                        card3value = 1;
                    }
                    if (card4value === 11) {
                        card4value = 1;
                    }
                    if (card5value === 11) {
                        card5value = 1;
                    }
                    if (card1value + card2value + card3value + card4value + card5value === 21) {
                        alert("You Won");
                    }
                    else if(card1value + card2value + card3value + card4value +card5value> 21){
                        alert("You Lost");
                    }
                } 
                else if(card1value + card2value + card3value + card4value + card5value === 21) {
                    alert("You Won");
                }
                
            }, 1000);
        }
    }
    else{
        randomIndex1 = getUniqueRandomIndex();
        card1.src = "Cards/" + cards[randomIndex1];
        indexes.push(randomIndex1);
        card1.style.visibility = "visible";

        randomIndex2 = getUniqueRandomIndex();
        card2.src = "Cards/" + cards[randomIndex2];
        indexes.push(randomIndex2);
        card2.style.visibility = "visible";

        randomIndex3 = getUniqueRandomIndex();
        croupier1.src = "Cards/" + cards[randomIndex3];
        indexes.push(randomIndex3);
        rotateCroupier1();
        croupier1.style.visibility = "visible";
        count ++;
        setTimeout(function () {
            card1value = ((randomIndex1 + 1) % 13);
            card2value = ((randomIndex2 + 1) % 13);
        
            if (card1value > 10 || card1value === 0) {
                card1value = 10;
            }
        
            if (card2value > 10 || card2value === 0) {
                card2value = 10;
            }
        
            if (card1value + card2value === 21) {
                alert("You win");
            } else if (card1value === 1) {
                if (11 + card2value === 21) {
                    alert("You won");
                }
            } else if (card2value === 1) {
                if (11 + card1value === 21) {
                    alert("You won");
                }
            }
        }, 1000);
        isGameStarted = true;
    }
    
    console.log(indexes);
}

function stand(){
    var croupier2 = document.getElementById('croupier2');
    var croupiersum;
    croupier1value = ((randomIndex3 + 1) % 13);
    if (croupier1value > 10 || croupier1value === 0) {
        croupier1value= 10;
    }
    function getUniqueRandomIndex() {
        var randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cards.length);
        } while (indexes.includes(randomIndex));
    return randomIndex;}
    if(isGameStarted){
        var randomIndex7 = getUniqueRandomIndex();
        croupier2.src = "Cards/" + cards[randomIndex7];
        indexes.push(randomIndex7);
        rotateCroupier();
        croupier2.style.visibility = "visible";
        croupier2value = ((randomIndex7 + 1) % 13);
        if (croupier2value > 10 || croupier2value === 0) {
            croupier2value = 10;
        }
        if(croupier1value === 1 && croupier2value ===1){
            croupiersum = 12;
        }
        if(croupier1value === 1){
            croupier1value = 11;
        }
        if(croupier2value === 1){
            croupier2value = 11;
        }
        croupiersum = croupier1value + croupier2value;
        if(count === 1){
            setTimeout(function () {
                if(croupiersum > card1value + card2value){
                    alert("You Lost");
                }
                else if(croupiersum === card1value + card2value){
                    alert("Draw");
                }
                else{
                    alert("You Won");
                }
            }, 1000);
            
        }
        else if(count === 2){
            setTimeout(function () {
                if(croupiersum > card1value + card2value + card3value){
                    alert("You Lost");
                }
                else if(croupiersum === card1value + card2value + card3value){
                    alert("Draw");
                }
                else{
                    alert("You Won");
                }
            }, 1000);
            
        }

        else if(count === 3){
            
                if(croupiersum > card1value + card2value + card3value + card4value){
                    alert("You Lost");
                }
                else if(croupiersum === card1value + card2value + card3value + card4value){
                    alert("Draw");
                }
                else{
                    alert("You Won");
                }
            
        }

        else if(count === 4){
            setTimeout(function () {
                if(croupiersum > card1value + card2value + card3value + card4value + card5value){
                    alert("You Lost");
                }
                else if(croupiersum === card1value + card2value + card3value + card4value + card5value){
                    alert("Draw");
                }
                else{
                    alert("You Won");
                }
            }, 1000);
            
        }
}
}

function rotateCroupier() {
    var croupierElement = document.getElementById('croupier2');
    if (!croupierElement.classList.contains('rotated')) {
        croupierElement.classList.add('rotated');
        croupierElement.style.pointerEvents = 'none';
    }
}
function rotateCroupier1() {
    var croupier1Element = document.getElementById('croupier1');
    if (!croupier1Element.classList.contains('rotated')) {
        croupier1Element.classList.add('rotated');
        croupier1Element.style.pointerEvents = 'none';
    }
}