import { inject } from 'aurelia-dependency-injection';
import {
    ValidationControllerFactory,
    ValidationController,
    ValidationRules
} from 'aurelia-validation';
import { BootstrapFormRenderer } from 'js/plugins/validation/bootstrap-form-renderer';

@inject(ValidationControllerFactory)
export class Validation {
    firstName = '';
    lastName = '';
    email = '';
    controller = null;

    constructor(controllerFactory) {
        this.controller = controllerFactory.createForCurrentScope();
        this.controller.addRenderer(new BootstrapFormRenderer());
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
    .ensure(a => a.firstName).required().minLength(5)
    .ensure(a => a.lastName).required().matches(/\d{3}-\d{2}-\d{4}/)
    .ensure(a => a.email).required().email()
    .on(Validation);
