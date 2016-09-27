export class register {
    initICheck() {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    }
    attached() {
        console.log('drugi');
        this.initICheck();
        $('body').addClass('gray-bg');
    }
}
