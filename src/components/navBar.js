import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { I18N } from 'aurelia-i18n';

@inject(Router, I18N)
export class NavBar {
    constructor(router, i18n) {
        this.router = router;
        this.i18n = i18n;
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
            { i18Key: 'WelcomeMenuItem', navModel: this.getRouterNavModel("welcome"), class: 'level1' },
            { i18Key: 'MenuItem1', navModel: this.getRouterNavModel("view1"), class: 'level1' }, {
                i18Key: 'Menu2',
                items: [
                    { i18Key: 'Menu2Item1', navModel: this.getRouterNavModel("view2_1") },
                    { i18Key: 'Menu2Item2', navModel: this.getRouterNavModel("view2_2") }
                ]
            }, {
                i18Key: 'Menu3',
                items: [
                    { i18Key: 'Menu3Item1', navModel: this.getRouterNavModel("view3_1") },
                    { i18Key: 'Menu3Item2', navModel: this.getRouterNavModel("view3_2") }, {
                        i18Key: 'Menu4',
                        items: [
                            { i18Key: 'Menu4Item1', navModel: this.getRouterNavModel("view4_1") },
                            { i18Key: 'Menu4Item2', navModel: this.getRouterNavModel("view4_2") }
                        ]
                    }

                ]
            },
            { i18Key: 'DatePickerViewItem', navModel: this.getRouterNavModel("datePickerView"), class: 'level1' },
            { i18Key: 'ValidationItem', navModel: this.getRouterNavModel("validation"), class: 'level1' }
        ];
    }

}
