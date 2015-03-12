// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var $ = function (ele) {

        return document.querySelector(ele);

    };

    WinJS.UI.Pages.define("/pages/registro/registro.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            document.getElementById("btnRegistroBebida").addEventListener("click",
                function () {
                    var bebida = new Modelo.Bebida($("#txtNomBebida").value,
                        $("#txtPrecioBebida").value
                    );

                    Azure.registro(bebida);

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
