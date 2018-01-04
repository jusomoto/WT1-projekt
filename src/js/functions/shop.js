
exports.createShop = function () {
        $(document).ready(function() {
            //$('#shop-items').html()
            $.getJSON("data/hardware.json", function( data ) {  
                $.each( data.hardware, function( key, val ) {
                    var htmlBody = "<li class='list-group-item'><button type=\"button\" class=\"btn btn-secondary \" id='buy-"+val.id+"'>Buy "+val.name+"</button><span>+ "+val.miningEarnings+" BTC</span></li>";
                    $('#shop-items').html($('#shop-items').html() + htmlBody);
                });
            });
        });  
    };