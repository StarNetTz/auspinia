export class fileManager {
    constructor() {

    }

    attached() {
        function animationHover(element, animation) {
            element = $(element);
            element.hover(
                function() {
                    element.addClass('animated ' + animation);
                },
                function() {
                    //wait for animation to finish before removing classes
                    window.setTimeout(function() {
                        element.removeClass('animated ' + animation);
                    }, 2000);
                });
        }

        $('.file-box').each(function() {
            animationHover(this, 'pulse');
        });

    }
}
