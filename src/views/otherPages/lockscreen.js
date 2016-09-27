import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class lockscreen{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/login");
	}
}