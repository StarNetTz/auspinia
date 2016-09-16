import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { I18N } from 'aurelia-i18n';

@inject(DialogController, I18N)

export class ModalDialog {

    constructor(controller, i18n) {
        this.controller = controller;
        this.i18n= i18n;
    }

    activate(c) {
        this.c = c;
    }
    cancel() {
        this.controller.cancel();
        swal({
            title: "",
            text: "Cancel!",
            type: "warning"
        });

    }
    ok() {
        this.controller.ok();
        swal({
            title: this.i18n="Goodjob",
            text: "ok!",
            type: "success"
        });
    }
}
