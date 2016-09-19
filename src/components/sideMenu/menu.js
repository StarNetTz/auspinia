import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Menu {
    
    constructor(router) {
        this.router = router;
    }

    init() {
        this.items = [
            { i18key: "sidemenu:Dashboards", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-th-large', items: [
                    { i18key: "sidemenu:Dashboard_v1", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_1') },
                    { i18key: "sidemenu:Dashboard_v2", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_2') },
                    { i18key: "sidemenu:Dashboard_v3", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_3') },
                    { i18key: "sidemenu:Dashboard_v4", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_4') }
                ]
            },
            { i18key: "sidemenu:Layouts", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-diamond', navModel: this.getNavModel('layouts'), class: 'level1'},
            { i18key: "sidemenu:Graphs", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-bar-chart-o', items: [
                    { i18key: "sidemenu:FlotCharts", type: "item", isVisible: true },
                    { i18key: "sidemenu:MorrisCharts", type: "item", isVisible: true },
                    { i18key: "sidemenu:RickshawCharts", type: "item", isVisible: true },
                    { i18key: "sidemenu:ChartsJs", type: "item", isVisible: true },
                    { i18key: "sidemenu:Chartist", type: "item", isVisible: true },
                    { i18key: "sidemenu:C3Charts", type: "item", isVisible: true },
                    { i18key: "sidemenu:PeityCharts", type: "item", isVisible: true },
                    { i18key: "sidemenu:SparklineCharts", type: "item", isVisible: true }
                ]
            },
            { i18key: "sidemenu:Restricted", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-lock', navModel: this.getNavModel('restricted'), class: 'level1'}
        ];
    }

    getNavModel(name) {
        let route = this.router.routes.find((item) => item.name === name);
        return route.navModel;
    }
}
