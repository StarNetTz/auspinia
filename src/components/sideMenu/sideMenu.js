import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { I18N } from 'aurelia-i18n';
import { UserProfile } from '../userProfile';
import { AuthService } from '../../services/authService';
import { EventAggregator } from 'aurelia-event-aggregator';
import { UserProfileAvailableNotification } from '../../notifications/notifications';
import {Menu} from './menu';

@inject(Router, I18N, UserProfile, AuthService, EventAggregator, Menu)
export class SideMenu {
    constructor(router, i18n, userProfile, authService, eventAggregator, menu) {
        this.router = router;
        this.i18n = i18n;
        this.userProfile = userProfile;
        this.authService = authService;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(UserProfileAvailableNotification, () => {
            //this.updateMenuVisibility();
        });
        this.menu = menu;
    }

    created(view){
        console.log("sidemenu created");
    }

    bind() {
         console.log("sidmenu bind");
    }

    attached() {
         console.log("sidemenu attached");
    }

    logout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
