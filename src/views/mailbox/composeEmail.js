import '../../js/plugins/summernote/summernote.min.js';
export class composeEmail {
    constructor() {

    }
    initSummernote() {
        $('.summernote').summernote();

    }
    attached() {
        this.initSummernote();
    }
}
