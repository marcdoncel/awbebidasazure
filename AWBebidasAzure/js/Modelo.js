(function () {
    var TipoBebida = function (nombre, precio) {

        this.nombre = nombre;
        this.precio = precio;
    };

    TipoBebida.prototype.toInsert = function () {

        var datos = {
            nombre: this.nombre,
            precio: this.precio

        };
        return datos;
    }

    WinJS.Namespace.define("Modelo", {
        Bebida: TipoBebida

    });

})();