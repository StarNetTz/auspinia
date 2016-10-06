import '../../js/plugins/clipboard/clipboard.min.js';
export class clipboard{
	constructor(){
	
	}

	attached() {
		new Clipboard('.btn');
	}
}