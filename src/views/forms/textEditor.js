import '../../js/plugins/summernote/summernote.min.js';

export class textEditor {

	attached() {
		$(document).ready(function(){

            $('.summernote').summernote();

       });
	}

}