export class fileManager {
    constructor() {

    }
    init() {
        $('.file-box').each(function() {
            animationHover(this, 'pulse');
        });
    }
    attached() {
        this.init();

    }
}
