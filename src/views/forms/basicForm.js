export class basicForm{
	constructor(){
	
	}
	 initChecks() {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });

    }
    attached() {
        this.initChecks();
    }
}