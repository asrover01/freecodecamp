
const footballTeam = {
  team :"Griffindor",
  year: 2006,
  headCoach: "Minerva McGonagall",
  players:[
    {
        name: "Oliver Wood",
        position: "forward",
        isCaptain: true,
    },{
name: "Fred Weasley",
        position: "midfielder",
        isCaptain: false,
    },{
        name: "Harry Potter",
        position: "defender",
        isCaptain: false,
    },{
        name: "Ron Weasley",
        position: "goalkeeper",
        isCaptain: false,
    },{
        name: "George Weasley",
        position: "forward",
        isCaptain: false
    }
  ]
}
//variables for html 

//the team, year and head coach html header
const team = document.querySelector("#team");
team.textContent = footballTeam.team;
const year = document.querySelector("#year");
year.textContent = footballTeam.year;
const headCoach = document.querySelector("#head-coach");
headCoach.textContent = footballTeam.headCoach; 

const playerCardsContainer = document.querySelector("#player-cards");
const playerFilter =document.querySelector("#players")



function playerCards(filter){
    playerCardsContainer.innerHTML = ""

    if (filter.toLowerCase() === "all"){
        footballTeam.players.forEach(player => {
    playerCardsContainer.innerHTML += `
    <div class="player-card">
        <h2>${player.isCaptain ? " (Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
        
    </div>
    `;
})
    }
    for (let i=0; i<footballTeam.players.length; i++){
        if (filter.toLowerCase() === footballTeam.players[i].position.toLowerCase() ){
             
    playerCardsContainer.innerHTML += `
    <div class="player-card">
        <h2>${footballTeam.players[i].isCaptain ? " (Captain)  " : ""}  ${footballTeam.players[i].name}</h2>
        <p>Position: ${footballTeam.players[i].position}</p>
        
    </div>
    `;
        }
    }
}


playerCards("all");


playerFilter.addEventListener("change", ()=> {
     playerCards(playerFilter.value);

})
