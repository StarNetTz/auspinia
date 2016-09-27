import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class invoicePrint{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		
		this.aurelia.setRoot("rootViews/invoicePrint");

	}
}