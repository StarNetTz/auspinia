import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {AuthorizationNotification} from '../notifications/authorizationNotification';
import jwt_decode from 'jwt-decode';

@inject(EventAggregator)
export class UserProfile {

    constructor(eventAggregator) {
       this.eventAggregator = eventAggregator;
       this.load();
       this.eventAggregator.subscribe(AuthorizationNotification, payload =>{
         this.load();
       });
    }

   
    load() {
        let profileString = localStorage.getItem('profile');
        if (profileString) {
            this.parseProfile(profileString);
        } else {
            this.createGuestUserProfile();
        }
    }

    parseProfile(profileString) {
        let profile = JSON.parse(profileString);
        console.log(profile);
        let firstName = profile.user_metadata.firstName;
        let lastName = profile.user_metadata.lastName;


        let fullName = "Invalid user metada";
        if (firstName && lastName)
        {
            fullName = `${firstName} ${lastName}`;
        }

        this.jobTitlei18key = profile.user_metadata.jobTitlei18key ? profile.user_metadata.jobTitlei18key : 'check user metadata';

        this.name = fullName;
        this.roles = this.parseRoles(profile.user_metadata.roles);
        this.isAuthenticated = this.checkIfAuthenticated();
    }

    createGuestUserProfile() {
  		this.name = "Guest";
        this.roles = ["guest"];
        this.isAuthenticated = false;
    }


    parseRoles(roles) {
        let retVal = '';
        roles.forEach((item) => {
            if (retVal != '') {
                retVal = retVal + ', ' + item;
            } else {
                retVal = item;
            }
        });
        if (retVal === '')
            retVal = "guest";
        return retVal;
    }

    isInRole(role) {
        let answer = false;
        this.roles.forEach((item) => {
            if (item === role) {
                answer = true;
            }
        });
        return answer;
    }

    checkIfAuthenticated() {
        let jwt = localStorage.getItem('idToken')
        if (!jwt) return false;
        if (this.tokenHasExpired(jwt)) return false;
        return true;
    }

    tokenHasExpired(jwt) {
        if (jwt) {
            let jwtExp = jwt_decode(jwt).exp;
            let expiryDate = new Date(0);
            expiryDate.setUTCSeconds(jwtExp);

            if (new Date() < expiryDate) {
                return false;
            }
        }
        return true;
    }
}
