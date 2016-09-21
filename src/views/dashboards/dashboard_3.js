/*Flot*/
import '../../js/plugins/flot/jquery.flot.js';
import '../../js/plugins/flot/jquery.flot.tooltip.min.js';
import '../../js/plugins/flot/jquery.flot.spline.js';
import '../../js/plugins/flot/jquery.flot.pie.js';
import '../../js/plugins/flot/jquery.flot.symbol.js';
import '../../js/plugins/flot/jquery.flot.time.js';
import '../../js/plugins/flot/curvedLines.js';

/*Peity*/
import '../../js/plugins/peity/jquery.peity.min.js';

/*jQuery UI*/
import '../../js/plugins/jquery-ui/jquery-ui.min.js';

/*Sparkline*/
import '../../js/plugins/sparkline/jquery.sparkline.min.js';

/*ChartJS*/
import '../../js/plugins/chartJs/Chart.min.js';

export class dashboard_3 {
    constructor() {}

    initSparkline() {

        $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52, 25], {
            type: 'line',
            lineColor: '#17997f',
            fillColor: '#1ab394',
        });
        $("#sparkline2").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
            type: 'bar',
            barColor: '#1ab394',
            negBarColor: '#c6c6c6'
        });
        $("#sparkline3").sparkline([1, 1, 2], {
            type: 'pie',
            sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']
        });
        $("#sparkline4").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
            type: 'line',
            lineColor: '#17997f',
            fillColor: '#ffffff',
        });
        $("#sparkline5").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
            type: 'tristate',
            posBarColor: '#1ab394',
            negBarColor: '#bfbfbf'
        });


        $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ], {
            type: 'discrete',
            lineColor: '#1ab394'
        });

        $("#sparkline7").sparkline([52, 12, 44], {
            type: 'pie',
            height: '150px',
            sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']
        });

        $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
            type: 'bar',
            barWidth: 8,
            height: '150px',
            barColor: '#1ab394',
            negBarColor: '#c6c6c6'
        });

        $("#sparkline9").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
            type: 'line',
            lineWidth: 1,
            height: '150px',
            lineColor: '#17997f',
            fillColor: '#ffffff',
        });
    }

    initPeity() {
        $("span.pie").peity("pie", {
            fill: ['#1ab394', '#d7d7d7', '#ffffff']
        })

        $(".line").peity("line", {
            fill: '#1ab394',
            stroke: '#169c81',
        })

        $(".bar").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"]
        })

        $(".bar_dashboard").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"],
            width: 100
        })

        var updatingChart = $(".updating-chart").peity("line", { fill: '#1ab394', stroke: '#169c81', width: 64 })

        setInterval(function() {
            var random = Math.round(Math.random() * 10)
            var values = updatingChart.text().split(",")
            values.shift()
            values.push(random)

            updatingChart
                .text(values.join(","))
                .change()
        }, 1000);
    }

    initFlot() {
        var lineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Example dataset",
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }, {
                label: "Example dataset",
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            }]
        };

        var lineOptions = {
            responsive: true
        };


        var ctx = document.getElementById("lineChart").getContext("2d");
        new Chart(ctx, { type: 'line', data: lineData, options: lineOptions });
    }
    attached() {
        this.initPeity();
        this.initSparkline();
        this.initFlot();

    }
}
