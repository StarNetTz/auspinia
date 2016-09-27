import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class login{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		this.aurelia.setRoot("rootViews/login");
	}
}