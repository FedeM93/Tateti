class Turno {

    constructor() {

        this.turnoDeJugador = true; // Indica el turno de que jugador es. true:JugadorX y false:JugadorO
        this.turnoActual = 0; // Indica numero de turno actual 

    }

    getTurnoActual() {
        return this.turnoActual;
    }

    getTurnoDeJugador() {
        return this.turnoDeJugador;
    }

    pasarTurno() {
        this.turnoActual++;
    }

    cambiarJugador(turnoActual) {

        if (turnoActual % 2 == 0) {
            this.turnoDeJugador = true;
        } else {
            this.turnoDeJugador = false;
        }

    }



}

class Casillero {

    x;
    o;

    constructor() {
        this.x = "x";
        this.o = "o";
    }

    getRellenoDeCasillero(turnoDeJugador) {
        if (turnoDeJugador) {
            return this.x;
        } else {
            return this.o;
        }
    }

}

class Tateti {

    turno;
    casillero;
    tablero;
    constructor() {
        this.turno = new Turno();
        this.casillero = new Casillero();
        this.tablero = document.getElementById("tateti");
    }

    jugarTurno() {

        this.tablero.addEventListener("click", (e) => {

            var aux = e.target;

            this.turno.cambiarJugador(this.turno.getTurnoActual());

            //rellena el casillero segun el turno del jugador
            if (aux.className == "casillero" || aux.className == "casilleroX" || aux.className == "casilleroO") {
                if (aux.textContent != "x" && aux.textContent != "o") {
                    aux.textContent = this.casillero.getRellenoDeCasillero(this.turno.getTurnoDeJugador());

                    if(this.turno.getTurnoDeJugador()){
                        
                        aux.className = "casilleroX";

                    }else{

                        aux.className = "casilleroA";

                    }
                    this.turno.pasarTurno();
                }

            }

            //revisa si hay coincidencia
            for (var i = 0; i < 9; i++) {

                if (this.tablero.children[0].textContent == this.tablero.children[1].textContent && this.tablero.children[0].textContent == this.tablero.children[2].textContent) {
                    if (this.tablero.children[0].textContent == "x") {
                        window.alert("GANA JUGADOR 1");
                    } else if (this.tablero.children[0].textContent == "o") {
                        window.alert("GANA JUGADOR 2");
                    }

                }

                if (this.tablero.children[3].textContent == this.tablero.children[4].textContent && this.tablero.children[3].textContent == this.tablero.children[5].textContent) {
                    if (this.tablero.children[3].textContent == "x") {
                        window.alert("GANA JUGADOR 1");
                    } else if (this.tablero.children[3].textContent == "o") {
                        window.alert("GANA JUGADOR 2");
                    }

                }

                if(this.tablero.children[6].textContent == this.tablero.children[7].textContent && this.tablero.children[6].textContent == this.tablero.children[8].textContent){
                    if(this.tablero.children[6].textContent == "x"){
                        window.alert("GANA JUGADOR 1");
                    }else if (this.tablero.children[6].textContent == "o"){
                        window.alert("GANA JUGADOR 2");
                    }

                }

                if(this.tablero.children[0].textContent == this.tablero.children[3].textContent && this.tablero.children[0].textContent == this.tablero.children[6].textContent){
                    if(this.tablero.children[0].textContent == "x"){
                        window.alert("GANA JUGADOR 1");
                    }else if (this.tablero.children[0].textContent == "o"){
                        window.alert("GANA JUGADOR 2");
                    }

                }

                if(this.tablero.children[1].textContent == this.tablero.children[4].textContent && this.tablero.children[1].textContent == this.tablero.children[7].textContent){
                    if(this.tablero.children[1].textContent == "x"){
                        window.alert("GANA JUGADOR 1");
                    }else if (this.tablero.children[1].textContent == "o"){
                        window.alert("GANA JUGADOR 2");
                    }

                }

                if(this.tablero.children[2].textContent == this.tablero.children[5].textContent && this.tablero.children[2].textContent == this.tablero.children[8].textContent){
                    if(this.tablero.children[2].textContent == "x"){
                        window.alert("GANA JUGADOR 1");
                    }else if (this.tablero.children[2].textContent == "o"){
                        window.alert("GANA JUGADOR 2");
                    }

                }

                if(this.tablero.children[0].textContent == this.tablero.children[4].textContent && this.tablero.children[0].textContent == this.tablero.children[8].textContent){
                    if(this.tablero.children[0].textContent == "x"){
                        window.alert("GANA JUGADOR 1");
                    }else if (this.tablero.children[0].textContent == "o"){
                        window.alert("GANA JUGADOR 2");
                    }

                }

                if(this.tablero.children[2].textContent == this.tablero.children[4].textContent && this.tablero.children[2].textContent == this.tablero.children[6].textContent){
                    if(this.tablero.children[2].textContent == "x"){
                        window.alert("GANA JUGADOR 1");
                    }else if (this.tablero.children[2].textContent == "o"){
                        window.alert("GANA JUGADOR 2");
                    }

                }
            }

        });




    }
}


var tateti = new Tateti();

tateti.jugarTurno();


var boton = document.getElementById("boton");

boton.addEventListener("click", ()=>{
    location.reload();
});










