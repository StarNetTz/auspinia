import { inject } from 'aurelia-framework';
import { I18N } from 'aurelia-i18n';
import { UserProfile } from './userProfile';
import { AuthService } from '../services/authService';

@inject(I18N, UserProfile, AuthService)
export class TopBar {
    constructor(i18n, userProfile, authService) {
        this.i18n = i18n;
        this.userProfile = userProfile;
        this.authService = authService;
    }

    login() {
      
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    setLocale(lang) {
        this.i18n.setLocale(lang);
    }


}
