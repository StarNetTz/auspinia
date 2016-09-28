import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class register{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/register");
	}
}