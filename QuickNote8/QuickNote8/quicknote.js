jQuery(function () {
    $("#lagre").click(function () {
        var newitem = $('<li>' + $("#txtinput").val() + '</li>');
        newitem.prependTo("#notes");
        $("#txtinput").val('');
    });
})