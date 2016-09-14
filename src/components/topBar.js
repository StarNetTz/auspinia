import { inject } from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

@inject(I18N)
export class TopBar {
	constructor(i18n){
		this.i18n = i18n;
	}

	setLocale(lang) {
  		this.i18n.setLocale(lang);
  		console.log(this.i18n.getLocale());
	}
}