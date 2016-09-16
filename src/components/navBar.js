import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { I18N } from 'aurelia-i18n';
import { UserProfile } from './userProfile';
import { AuthService } from '../services/authService';
import { EventAggregator } from 'aurelia-event-aggregator';
import { UserProfileAvailableNotification } from '../notifications/notifications';

@inject(Router, I18N, UserProfile, AuthService, EventAggregator)
export class NavBar {
    constructor(router, i18n, userProfile, authService, eventAggregator) {
        this.router = router;
        this.i18n = i18n;
        this.userProfile = userProfile;
        this.authService = authService;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(UserProfileAvailableNotification, () => {
            this.updateMenuVisibility();
        });
    }

    bind() {
        this.initMenu();
        this.updateMenuVisibility();
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
            { i18Key: 'ValidationItem', navModel: this.getRouterNavModel("validation"), class: 'level1' },
            { i18Key: 'RestrictedMenuItem', navModel: this.getRouterNavModel("restricted_1"), class: 'level1' }
        ];
    }

    updateMenuVisibility() {
        this.menu.forEach((item) => {
            if (item.navModel) {
                if (item.navModel.settings.isRestricted) {
                    item.hidden = !this.userProfile.isAuthenticated;
                }
            }
        });
    }

    logout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
