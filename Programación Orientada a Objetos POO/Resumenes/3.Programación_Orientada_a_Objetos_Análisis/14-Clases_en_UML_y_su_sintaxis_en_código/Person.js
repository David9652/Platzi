function Persona (nombre){
    this.name = nombre;
};

Persona.prototype.walk = function () {
    console.log(`me llamo ${this.name} y estoy caminando}`);
}