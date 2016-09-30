import '../../js/plugins/pace/pace.min.js';
import '../../js/plugins/jasny/jasny-bootstrap.min.js';
import Dropzone from 'dropzone';
import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml.js';

export class fileUpload {

constrctor(){
	Dropzone.options.dropzoneForm = {
            paramName: "file", // The name that will be used to transfer the file
            maxFilesize: 2, // MB
            dictDefaultMessage: "<strong>Drop files here or click to upload. </strong></br> (This is just a demo dropzone. Selected files are not actually uploaded.)"
        };
}

	attached(){ 
		

        $(document).ready(function(){

            var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
                lineNumbers: true,
                matchBrackets: true
            });

            var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
                lineNumbers: true,
                matchBrackets: true
            });

            var editor_three = CodeMirror.fromTextArea(document.getElementById("code3"), {
                lineNumbers: true,
                matchBrackets: true
            });

       });
	}

}