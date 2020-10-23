let score = [0,1];
var turn;
var team1 ={
    name:"REAL MADRID",
    goals:[],
    score:0 
};
var team2 ={
    name:"HUESEA",
    goals:[],
    score:0 
};

window.onload =() =>{
    selectTurn();
    updateButtonText();
    updateScore();
    updateName();
};

selectTurn =() =>{
    turn = Math.round(Math.random())+1;
};

updateButtonText =() =>{
     var button =document.getElementById('strike');
     button.textContent = '$_turn===1?team1.name: team2.name} Strike';
}
updateScore =() =>{
   // document.getElementById('team-1-score').textContent = team1.score;

    //document.getElementById('team-2-score').textContent = team2.score;
}
updateName =() =>{
document.getElementById('team-1-name').textContent = team1.name;
document.getElementById('team-2-name').textContent = team2.name;
}
//container 1
var team3 ={
    name:"Arsenal",
    goal:[],
    score:0
};
var team4 ={
    name:"chelsea",
    goal:[],
    score:0
};
//conatiner 2
var team5 ={
    name:"FCB",
    goal:[],
    score:0
};
var team5 ={
    name:"LiverPool",
    goal:[],
    score:0
};  


