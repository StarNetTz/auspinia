import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class login2{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/login2");
	}
}