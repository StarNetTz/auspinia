import { DialogService } from 'aurelia-dialog';
import { inject } from 'aurelia-framework';
import { ModalDialog } from 'modalDialog';

@inject(DialogService)

export class Modal {

    constructor(dialogService) {
        this.dialogService = dialogService;
        this.colours = [];
    }
    activate() {
        this.colours = [{ Id: 1, Name: "Blue" }, { Id: 2, Name: "Green" }];
    }
    openModal(c) {
        this.dialogService.open({ viewModel: ModalDialog, model: c });
    }
};
