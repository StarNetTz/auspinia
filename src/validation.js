import { inject } from 'aurelia-dependency-injection';
import {
    ValidationControllerFactory,
    ValidationController,
    ValidationRules
} from 'aurelia-validation';
import { BootstrapFormRenderer } from 'js/plugins/validation/bootstrap-form-renderer';
import { I18N } from 'aurelia-i18n';

@inject(ValidationControllerFactory, I18N)
export class Validation {
    firstName = '';
    lastName = '';
    email = '';
    controller = null;

    constructor(controllerFactory, i18N) {
        this.controller = controllerFactory.createForCurrentScope();
        this.controller.addRenderer(new BootstrapFormRenderer());
        this.i18n= i18N;
    }


    submit() {
       // this.controller.validate();
        this.controller.validate().then(function(result) {
            console.log(result.length);
            if (result.length === 0) {
                console.log("save");
            }

        });

    }
}

ValidationRules
    .ensure(a => a.firstName).required().minLength(5).maxLength(15)
    .ensure(a => a.lastName).required().matches(/\d{3}-\d{2}-\d{4}/)
    .ensure(a => a.email).required().email()
    .on(Validation);


//@required({ tr: i18n.tr('email'), message: i18n.tr('validatejs.presence.message') })