import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class forgetPassword{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/forgetPassword");
	}
}