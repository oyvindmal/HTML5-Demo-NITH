jQuery(function () {
    $(document).ready(function () {
        alert("Jquery initialized");
        EpabLookup();
    })

    var EpabLookup = function () {
        var urlstring = "http://fraktguide.bring.no/fraktguide/api/postalCode.json?pnr=1337&callback=?";

        $.ajax({
            url: urlstring,
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data, status) {
                alert(data.result);
            },
            error: function() {
                alert("Error loading data");
            }
        })


    }
})