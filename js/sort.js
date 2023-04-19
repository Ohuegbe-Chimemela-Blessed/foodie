$(document).on("change", ".price-sorting", function() {
    var sortingMethod = $(this).val();
    if(sortingMethod == 'l2h')
    {
        sortProductsPriceAscending();
    }
    else if(sortingMethod == 'h2l')
    {
        sortProductsPriceDescending();
    }
});            
function sortProductsPriceAscending() {
    var products = $('.product-item');
    products.sort(function(a, b){ return $(a).data("price-item")-$(b).data("price-item")});
    $(".product-grid").html(products);
}     $(document).on("change", ".price-sorting", function() {
                var sortingMethod = $(this).val();
                if(sortingMethod == 'l2h')
                {
                    sortProductsPriceAscending();
                }
                else if(sortingMethod == 'h2l')
                {
                    sortProductsPriceDescending();
                }
            });            
function sortProductsPriceAscending() {
    var products = $('.product-item');
    products.sort(function(a, b){ return $(a).data("price-item")-$(b).data("price-item")});
    $(".product-grid").html(products);
}

function sortProductsPriceDescending(){
    var products = $('.product-item');
    products.sort(function(a, b){ return $(b).data("price-item") - $(a).data("price-item")});
    $(".product-grid").html(products);
}