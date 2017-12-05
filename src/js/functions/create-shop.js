function createShop() {
    $(document).ready(function() {
        //$('#shop-items').html()
        $.getJSON("data/hardware.json", function( data ) {  
            console.log( "JSON Data: " + data);
            $.each( data.hardware, function( key, val ) {
                console.log(key + "value:: " + val );
            });
        });
    });
   
}