// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/buscar/buscar.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var nom = document.getElementById("txtNom").value;
            var precio = document.getElementById("txtPrecio").value;

            document.getElementById("btnBuscarBebida").addEventListener("click", function () {
                Azure.buscar(new Modelo.Bebida(nom, precio).toInsert()).done(
                    function(res) {

                        if (res.length > 0) {
                            var d = new Windows.UI.Popups.
                                MessageDialog("Bebida encontrada");

                            d.showAsync();

                        } else {
                            var d = new Windows.UI.Popups.
                                MessageDialog("La bebida no existe");

                            d.showAsync();

                        }


                    });
            });
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
