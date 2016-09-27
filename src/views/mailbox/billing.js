import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class billing{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/billing");
	}
}