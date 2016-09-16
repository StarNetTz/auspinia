import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';

@inject(DialogController)

export class ModalDialog {

    constructor(controller) {
        this.controller = controller;
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
            title: "Good job!",
            text: "ok!",
            type: "success"
        });
    }
}
