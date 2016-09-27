import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class action{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/action");
	}
}