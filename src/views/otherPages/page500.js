import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class page500{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/page500");
	}
}