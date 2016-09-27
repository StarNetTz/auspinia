import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class register{
	constructor(aurelia){
		this.aurelia = aurelia;
	}

	attached()
	{
		console.log('prvi');
		this.aurelia.setRoot("rootViews/register");
	}
}