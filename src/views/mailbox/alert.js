import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class alert{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/alert");
	}
}