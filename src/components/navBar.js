import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class NavBar {
    constructor(router) {
        this.router = router;
    }

    bind() {
        this.initMenu();
    }

    getRouterNavModel(name) {
        let route = this.router.routes.find((item) => item.name === name);
        return route.navModel;
    }

    initMenu() {
        this.menu = [
            { title: 'Welcome', navModel: this.getRouterNavModel("welcome") },
            { title: 'View1', navModel: this.getRouterNavModel("view1") }, {
                title: 'View 2',
                items: [
                    { title: 'View 2_1', navModel: this.getRouterNavModel("datePickerView") },
                    { title: 'View 2_2', navModel: this.getRouterNavModel("view2_2") }
                ]
            }, {
                title: 'View3',
                items: [
                    { title: 'View 3_1', navModel: this.getRouterNavModel("view3_1") },
                    { title: 'View 3_2', navModel: this.getRouterNavModel("view3_2") },
                    {
                        title: 'View 4',
                        items: [
                            { title: 'View 4_1', navModel: this.getRouterNavModel("view4_1") },
                            { title: 'View 4_2', navModel: this.getRouterNavModel("view4_2") }
                        ]
                    }

                ]
            }
        ];
    }

}
