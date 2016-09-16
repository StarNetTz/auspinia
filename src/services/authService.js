import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthorizationNotification } from '../notifications/authorizationNotification';

@inject(HttpClient, EventAggregator)
export class AuthService {

    constructor(http, eventAggregator) {
        this.http = http;
        this.eventAggregator = eventAggregator;

        this.initializeAuth0Lock();

        this.http.configure(config => {
            config.withDefaults({
                headers: { 'Authorization': `Bearer ${localStorage.getItem('idToken')}` }
            });
        });
    }

    initializeAuth0Lock() {
        var options = {
            auth: {
                responseMode: 'form_post'
            }
        };
        this.lock = new Auth0Lock('03Qbs0qqa96HCyjHoZ1ZRrg9z5BrFWRy', 'starnet.eu.auth0.com');
        this.lock.on("authenticated", authResult => {
            console.log(authResult);
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    console.log('sranje');
                    console.log(err);
                    return;
                }

                localStorage.setItem('idToken', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                this.eventAggregator.publish(new AuthorizationNotification({ login: true }));
            });
        });
    }

    login() {
        this.lock.show();
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('idToken');
        this.eventAggregator.publish(new AuthorizationNotification({ logout: true }));
    }

}
