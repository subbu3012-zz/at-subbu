import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service'
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    isSideNavActive: boolean = false;
    activeMenu: string = "Order List";

    constructor(public sharedServ: SharedService, public router: Router) {

        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.isSideNavActive = false;
                this.sharedServ.showProgressBar = false;
            } else if (val instanceof NavigationEnd) {
                this.sharedServ.showProgressBar = true;
            }
        });
    }
}
