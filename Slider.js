$(function(){
    $('.BMW').BMW();
});

(function($){
    $.fn.BMW = function(){
        var self = this;
        self.each(function(i, el){
            $(this).data({
                number: i
            });
        });
        self.on('click', function(e){
            $('.gallery-wrapper').remove();
            var gallery = $('<div class="gallery-wrapper" />');
            var image = $('<img />')
                .attr({
                    src: e.target.src,
                    alt: e.target.alt
                })
                .data({
                    number: $(e.target).data('number')
                })
                .appendTo(gallery);

            $('<input type="button" value="Next" />')
                .on('click', function(){
                    var number = image.data('number');
                    var next = self.filter(function(i){
                        return i === number;
                    }).next();
                    image
                        .attr({
                            src: next.attr('src'),
                            alt: next.attr('alt')
                        })
                        .data({
                            number: next.data('number')
                        });
                })
                .appendTo(gallery);

            $('<input type="button" value="Prev" />')
                .on('click', function(){
                    var number = image.data('number');
                    var next = self.filter(function(i){
                        return i === number;
                    }).prev();
                    image
                        .attr({
                            src: next.attr('src'),
                            alt: next.attr('alt')
                        })
                        .data({
                            number: next.data('number')
                        });
                })
                .appendTo(gallery);
            gallery.appendTo('body');
        });
    };
}(jQuery));
