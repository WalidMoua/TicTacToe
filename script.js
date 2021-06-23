var gameZone = $(".gameZone");
var zone1 = $("#zone1");
var zone2 = $("#zone2");
var zone3 = $("#zone3");
var zone4 = $("#zone4");
var zone5 = $("#zone5");
var zone6 = $("#zone6");
var zone7 = $("#zone7");
var zone8 = $("#zone8");
var zone9 = $("#zone9");
var player1Button = $("#player1");
var player2Button = $("#player2");
let player1;
let player2;
player1Button.click(function (){ return player1= true})
player2Button.click(function (){ return player1= false})
///controllo del click mouse e iserimento della croce o X
stat1=false
stat2=false
stat3=false
stat4=false
stat5=false
stat6=false
stat7=false
stat8=false
stat9=false
let board = [
    ['','',''],
    ['','',''],
    ['','','']
]
function resetBoard(){
    board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    $("#xImg1").attr("src","vuoto.png");
    $("#xImg2").attr("src","vuoto.png");
    $("#xImg3").attr("src","vuoto.png");
    $("#xImg4").attr("src","vuoto.png");
    $("#xImg5").attr("src","vuoto.png");
    $("#xImg6").attr("src","vuoto.png");
    $("#xImg7").attr("src","vuoto.png");
    $("#xImg8").attr("src","vuoto.png");
    $("#xImg9").attr("src","vuoto.png");
    stat1=false;
    stat2=false;
    stat3=false;
    stat4=false;
    stat5=false;
    stat6=false;
    stat7=false;
    stat8=false;
    stat9=false;
}
finishGame= (A) => {
    setTimeout(function(){
        if (confirm(A + " Won!! " + "Start a new game?")) {
            resetBoard()
        }
    }, 100);
}
player1Active= () => {
    player1Button
}

player2Active = () => {
    player2Button
}
zone1.click(function() {
    if (stat1==false) { if (player1==true) {
        console.log("player1");
        $("#xImg1").attr("src","circle.png");
        board[0][0]= "O"
        checkWinner()
        stat1=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg1").attr("src","x.png")
        stat1=true
        board[0][0]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone2.click(function() {
    if (stat2==false) { if (player1==true) {
        console.log("player1");
        $("#xImg2").attr("src","circle.png");
        board[0][1]= "O"
        checkWinner()
        stat2=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg2").attr("src","x.png")
        stat2=true
        board[0][1]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone3.click(function() {
    if (stat3==false) { if (player1==true) {
        console.log("player1");
        $("#xImg3").attr("src","circle.png");
        board[0][2]= "O"
        checkWinner()
        stat3=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg3").attr("src","x.png")
        stat3=true
        board[0][2]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone4.click(function() {
    if (stat4==false) { if (player1==true) {
        console.log("player1");
        $("#xImg4").attr("src","circle.png");
        board[1][0]= "O"
        checkWinner()
        stat4=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg4").attr("src","x.png")
        stat4=true
        board[1][0]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone5.click(function() {
    if (stat5==false) { if (player1==true) {
        console.log("player1");
        $("#xImg5").attr("src","circle.png");
        board[1][1]= "O"
        checkWinner()
        stat5=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg5").attr("src","x.png")
        stat5=true
        board[1][1]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone6.click(function() {
    if (stat6==false) { if (player1==true) {
        console.log("player1");
        $("#xImg6").attr("src","circle.png");
        board[1][2]= "O"
        checkWinner()
        stat6=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg6").attr("src","x.png")
        stat6=true
        board[1][2]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone7.click(function() {
    if (stat7==false) { if (player1==true) {
        console.log("player1");
        $("#xImg7").attr("src","circle.png");
        board[2][0]= "O"
        checkWinner()
        stat7=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg7").attr("src","x.png")
        stat7=true
        board[2][0]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone8.click(function() {
    if (stat8==false) { if (player1==true) {
        console.log("player1");
        $("#xImg8").attr("src","circle.png");
        board[2][1]= "O"
        checkWinner()
        stat8=true
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg8").attr("src","x.png")
        stat8=true
        board[2][1]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})
zone9.click(function() {
    if (stat9==false) { if (player1==true) {
        console.log("player1");
        $("#xImg9").attr("src","circle.png");
        board[2][2]= "O"
        stat9=true
        checkWinner()
        return player1=false
        
    
}
    else {
        console.log("player2")
        $("#xImg9").attr("src","x.png")
        stat9=true
        board[2][2]= "X"
        checkWinner()
        return player1=true 
};}
else {
    alert("Cambia posizione!!")
};
})

/*checkWinner =() => {
    /// horizontal
    if (board[2][2]=== "X" & board[2][1]=== "X" & board[2][0]==="X") {
        setTimeout(function(){ alert("X Won"); }, 100);
    }
} */
function equals3(a, b, c) {
    return a == b && b == c && a != '';
}

function checkWinner() {
    let winner = null;

    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board[i][2])) {
        winner = board[i][0];
        finishGame(winner);
    }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[1][i], board[2][i])) {
        winner = board[0][i];
        finishGame(winner);
    }
    }

    // Diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
        finishGame();
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
        finishGame(winner);
    }
}