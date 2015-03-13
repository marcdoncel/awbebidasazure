(function () {
    var cliente = new WindowsAzure.MobileServiceClient(
        "https://awnotepad.azure-mobile.net/",
        "dpRuizzhXZcJOEFKRujsFLigRMUTHQ39");

var busqueda = function (nom) {
        var tabla = cliente.getTable("bebidas");
        return tabla.where({ nombre: nom }).read();
    }

    var registro = function (usuario) {
        var tabla = cliente.getTable("bebidas");
        tabla.insert(usuario.toInsert()).done(
            function (res) {
                if (res.id) {
                    WinJS.Navigation.back(1);
                    new Windows.UI.Popups.
                       MessageDialog
                        ("Bebida creada correctamente")
                        .showAsync();
                }
                else {
                    new Windows.UI.Popups.
                        MessageDialog("Error al insertar bebida").showAsync();
                }
            }
        );


    };

    function GetBebidas(nom) {
        var tabla = cliente.getTable("bebidas");

        return tabla.where({ nombre: nom }).read();


    }

    WinJS.Namespace.define("Azure", {
        registro: registro,
        Busqueda: busqueda,
        bebidas: GetBebidas
        
    });

})();