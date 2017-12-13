
exports.createShop = function () {
        $(document).ready(function() {
            //$('#shop-items').html()
            $.getJSON("data/hardware.json", function( data ) {  
                $.each( data.hardware, function( key, val ) {
                    var htmlBody = "<div><button type=\"button\" class=\"btn btn-secondary \" id='buy-"+val.id+"'>Buy "+val.name+"</button><span>+ "+val.miningEarnings+" BTC</span></div>";
                    $('#shop-items').html($('#shop-items').html() + htmlBody);
                });
            });
        });  
    };