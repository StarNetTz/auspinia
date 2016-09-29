import '../../js/plugins/tinycon/tinycon.min.js';
export class tinycon{
    constructor() {

    }
    attached() {
         $('#iconExample1').click(function(){

            Tinycon.setBubble(1);

            Tinycon.setOptions({
                background: '#f03d25'
            });
        });

        $('#iconExample2').click(function(){

            Tinycon.setBubble(1000);

            Tinycon.setOptions({
                background: '#f03d25'
            });
        });

        $('#iconExample3').click(function(){

            Tinycon.setBubble('In');

            Tinycon.setOptions({
                background: '#f03d25'
            });
        });

        $('#iconExample4').click(function(){

            Tinycon.setOptions({
                background: '#e0913b'
            });
            Tinycon.setBubble(8);

        });
    }
}