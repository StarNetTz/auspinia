/*Sparkline*/
import '../../js/plugins/sparkline/jquery.sparkline.min.js';

export class profile2 {
    constructor() {

    }
    initSparkline() {
        $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 48], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#1ab394',
            fillColor: "transparent"
        });
    }
    attached() {
        this.initSparkline();
    }
}
