(function () {
    var cliente = new WindowsAzure.MobileServiceClient(
        "https://awnotepad.azure-mobile.net/",
        "dpRuizzhXZcJOEFKRujsFLigRMUTHQ39");


    var buscar = function (bebida) {
        var tabla = cliente.getTable("bebidas");


        try {
            return tabla.where({ nombre: bebida.nombre }).read();
                
        } catch (e) {

            var ee = e.message;
        }
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
    WinJS.Namespace.define("Azure", {
        buscar: buscar,
        registro: registro


    });

})();