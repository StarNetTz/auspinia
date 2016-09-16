import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)

export class ModalDialog{

   constructor(controller){
      this.controller = controller;
         }

   activate(c) {
      this.c = c;
   }
}