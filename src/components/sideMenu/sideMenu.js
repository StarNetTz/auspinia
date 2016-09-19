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
        this.menu = menu;
        this.eventAggregator.subscribe(UserProfileAvailableNotification, () => {
            console.log("user profile available to sidemenu");
            this.updateMenuVisibility();
        });
        
    }

    created(view){
        console.log("sidemenu created");
    }

    bind() {
        this.menu.init();
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

    updateMenuVisibility() {

        this.menu.items.forEach((item) => {
             console.log(item);
            if (item.navModel) {
                if (item.navModel.settings.isRestricted) {
                    let isAuthenticated = this.userProfile.isAuthenticated;
                    let isInRole = true;
                    if (item.navModel.settings.requiredRole)
                    {
                        isInRole = this.userProfile.isInRole(item.navModel.settings.requiredRole);
                    }
                    item.isVisible = (isAuthenticated && isInRole);
                    console.log(item.isVisible);
                }
            }
        });
    }
}
