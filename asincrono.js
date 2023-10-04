const teams = ["Chelsie", "Bayern", "Cruz Azul"]

console.log('console 1');
console.log(teams);

function getTeams(){
    return teams;
}

console.log('console 2');
console.log(getTeams());

function asyncGetTeams(){
    setTimeout(() => teams, 2000);
}

console.log('console 3');
console.log(asyncGetTeams());
console.log('Termina script');