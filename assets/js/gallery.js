$( '[data-fancybox="gallery"]' ).fancybox({
    selector : '.item:visible > a',
    caption : function( instance, item ) {
        var caption = $(this).data('caption') || '';
        var prize = $(this).data('prize') || '';

        if ( item.type === 'image' ) {
            // '<a href="' + item.src + '">Download image</a>'
            caption = "<div class=\"caption\">" + caption + '</div>'  + '<div class=\"caption_tags\">' +
                "<div>" + $(this).data('category') + "</div>" +
                "<div>"+ $(this).data('artist') +"</div>" +
            (prize.length>0 ? ("<div>" + prize +"</div>") : '') +
            "</div>";
        }

        return caption;
    }
});

$grid = $('.grid').isotope({
  // options
  itemSelector: '.item',
  layoutMode: 'masonry',
  percentPosition: true
});

$(document).ready(function () {

    $grid.imagesLoaded(function () {
        $grid.isotope('layout');
    });

    var btns = $(".filter-buttons button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var active_class = "filter-active";
            var current = document.getElementsByClassName(active_class);
            current[0].className = current[0].className.replace(" " + active_class, "");
            this.className += " "+active_class;
        });
    }
});

function filter(tag){
    $grid.isotope({
  // filter element with numbers greater than 50
  filter: function() {
    var tags = $(this).data('tags').split(' ');
    return tags.includes(tag);
  }
})
}

function filterReset(){
    $grid.isotope({
        // filter element with numbers greater than 50
        filter: "*"
    })
}
