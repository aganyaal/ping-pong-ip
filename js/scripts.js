// back-end logic
var pingit = function(number) {
    var product = [];
    for (var i = 1; i <= number; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            product.push("Ping Pong");
        } else if (i % 3 == 0) {
            product.push("ping");
        } else if (i % 5 == 0) {
            product.push("pong");
        } else {
            product.push(i);
        }
    }
    return product;
};

// Front-end Logic
$(document).ready(function() {
    $("div.bodii").hide();
    $("form#form1").submit(function() {
        event.preventDefault();
        var number = parseInt($("input#input1").val());
        var output = pingit(number);
        output.forEach(function(num) {
            $("ul#ul").append("<li>" + num + "</li>")
        });
        $("div.hiding").hide();
        $("div.bodii").fadeIn(1000).fadeOut(1000);
        $("div.hiding").fadeIn(4000);
    });
});
