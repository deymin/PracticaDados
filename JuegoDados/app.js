//var numRandom = Math.random(1,6);
//console.log(numRandom);

/*nction generarNumRandom(){
    let numRandom = Math.floor(Math.random() * 6) + 1;
    return numRandom;
}*/

var current = 0;
var scoreJ1 = 0;
var scoreJ2 = 0;
var numRandom = 0;
var jugadorTurno = 0;

//do{   
    //do{

            document.querySelector(".btn-roll").addEventListener('click', function(){
                if(scoreJ1 >= 50 || scoreJ2 >= 50){
                    alert("El juego ha terminado!");                   
                }else{
                    numRandom = Math.floor(Math.random() * 6) + 1;
                    document.querySelector(".dice").src="dice-"+numRandom+".png";
                    document.getElementById("current-"+jugadorTurno).innerText = (current += numRandom);
                    if(numRandom == 1 && jugadorTurno == 0){
                        //document.getElementById("score-"+jugadorTurno).innerText = (scoreJ1 = scoreJ1 + current);
                        document.getElementById("current-"+jugadorTurno).innerText = 0;                
                        current = 0;
                        jugadorTurno=1;
                        alert("Obtuviste numero 1!, turno del jugador 2!");
                        document.getElementsByClassName("player-0-panel")[0].classList.remove("active");
                        document.getElementsByClassName("player-1-panel")[0].classList.add("active"); 
                    }else if (jugadorTurno == 1 && numRandom == 1){
                        //document.getElementById("score-"+jugadorTurno).innerText = (scoreJ2 = scoreJ2 + current);
                        document.getElementById("current-"+jugadorTurno).innerText = 0;                
                        current = 0;
                        jugadorTurno=0; 
                        alert("Obtuviste numero 1!, turno del jugador 1!");
                        document.getElementsByClassName("player-1-panel")[0].classList.remove("active");
                        document.getElementsByClassName("player-0-panel")[0].classList.add("active");
                    }
                }
            });
            document.querySelector(".btn-hold").addEventListener('click', function(){
                if(scoreJ1 >= 50 || scoreJ2 >= 50){
                    alert("El juego ha terminado!");                   
                }else{
                    if(jugadorTurno == 0){
                        document.getElementById("score-"+jugadorTurno).innerText = (scoreJ1 = scoreJ1 + current);
                        document.getElementById("current-"+jugadorTurno).innerText = 0;
                        current = 0;
                        jugadorTurno = 1;
                        alert("Progreso guardado, fin del turno");
                        document.getElementsByClassName("player-0-panel")[0].classList.remove("active");
                        document.getElementsByClassName("player-1-panel")[0].classList.add("active");
                    }else{
                        document.getElementById("score-"+jugadorTurno).innerText = (scoreJ2 = scoreJ2 + current);
                        document.getElementById("current-"+jugadorTurno).innerText = 0;
                        current = 0;
                        jugadorTurno = 0;
                        alert("Progreso guardado, fin del turno");
                        document.getElementsByClassName("player-1-panel")[0].classList.remove("active");
                        document.getElementsByClassName("player-0-panel")[0].classList.add("active");
                    }
                }
             });    
        

        document.querySelector(".btn-new").addEventListener('click', juegoNuevo);

function juegoNuevo(){
    document.getElementById("current-0").innerText = 0;
            document.getElementById("current-1").innerText = 0;
            document.getElementById("score-0").innerText = 0;
            document.getElementById("score-1").innerText = 0;
            document.getElementsByClassName("player-1-panel")[0].classList.remove("active");
            document.getElementsByClassName("player-0-panel")[0].classList.add("active");
            current = 0;
            scoreJ1 = 0;
            scoreJ2 = 0;
            numRandom = 0;
            jugadorTurno = 0;
}

    //}while(bandera!=false);
//}while(score<=100);