export class Menu {
    
    constructor() {
        this.init();
    }

    init() {
        this.items = [
            { caption: "sidemenu:Dashboards", isActive: false, type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-th-large', items: [
                    { caption: "Dashboard v.1", isActive: false, type: "item", isVisible: true },
                    { caption: "Dashboard v.2", isActive: false, type: "item", isVisible: true },
                    { caption: "Dashboard v.3", isActive: false, type: "item", isVisible: true },
                    { caption: "Dashboard v.4", isActive: false, type: "item", isVisible: true }
                ]
            },
            { caption: "Layouts", isActive: false, type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-diamond'},
            { caption: "Graphs", isActive: false, type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-bar-chart-o', items: [
                    { caption: "Flot Charts", isActive: false, type: "item", isVisible: true },
                    { caption: "Morris.js Charts", isActive: false, type: "item", isVisible: true },
                    { caption: "Rickshaw Charts", isActive: false, type: "item", isVisible: true },
                    { caption: "Chart.js", isActive: false, type: "item", isVisible: true },
                    { caption: "Chartist", isActive: false, type: "item", isVisible: true },
                    { caption: "c3 charts", isActive: false, type: "item", isVisible: true },
                    { caption: "Peity Charts", isActive: false, type: "item", isVisible: true },
                    { caption: "Sparkline Charts", isActive: false, type: "item", isVisible: true }
                ]
            }
        ];
    }

}
