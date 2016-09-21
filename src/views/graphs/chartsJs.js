import 'js/plugins/chartJs/Chart.min.js';

export class chartsJs {
    constructor() {}

    attached() {
        let lineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [

                {
                    label: "Data 1",
                    backgroundColor: 'rgba(26,179,148,0.5)',
                    borderColor: "rgba(26,179,148,0.7)",
                    pointBackgroundColor: "rgba(26,179,148,1)",
                    pointBorderColor: "#fff",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }, {
                    label: "Data 2",
                    backgroundColor: 'rgba(220, 220, 220, 0.5)',
                    pointBorderColor: "#fff",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        let lineOptions = {
            responsive: true
        };


        let ctx = document.getElementById("lineChart").getContext("2d");
        new Chart(ctx, { type: 'line', data: lineData, options: lineOptions });

        let barData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Data 1",
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: "Data 2",
                backgroundColor: 'rgba(26,179,148,0.5)',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        };

        let barOptions = {
            responsive: true
        };


        let ctx2 = document.getElementById("barChart").getContext("2d");
        new Chart(ctx2, { type: 'bar', data: barData, options: barOptions });

        let polarData = {
            datasets: [{
                data: [
                    300, 140, 200
                ],
                backgroundColor: [
                    "#a3e1d4", "#dedede", "#b5b8cf"
                ],
                label: [
                    "My Radar chart"
                ]
            }],
            labels: [
                "App", "Software", "Laptop"
            ]
        };

        let polarOptions = {
            segmentStrokeWidth: 2,
            responsive: true

        };

        let ctx3 = document.getElementById("polarChart").getContext("2d");
        new Chart(ctx3, { type: 'polarArea', data: polarData, options: polarOptions });

        let doughnutData = {
            labels: ["App", "Software", "Laptop"],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ["#a3e1d4", "#dedede", "#b5b8cf"]
            }]
        };


        let doughnutOptions = {
            responsive: true
        };


        let ctx4 = document.getElementById("doughnutChart").getContext("2d");
        new Chart(ctx4, { type: 'doughnut', data: doughnutData, options: doughnutOptions });


        let radarData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgba(220,220,220,0.2)",
                borderColor: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                backgroundColor: "rgba(26,179,148,0.2)",
                borderColor: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };

        let radarOptions = {
            responsive: true
        };

        let ctx5 = document.getElementById("radarChart").getContext("2d");
        new Chart(ctx5, { type: 'radar', data: radarData, options: radarOptions });
    }
}
