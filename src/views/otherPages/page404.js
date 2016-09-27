import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class page404{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/page404");
	}
}