import { Component, ElementRef, NgZone, OnInit, ViewChild, OnChanges } from '@angular/core';
import { SharedService } from './../shared/shared.service';
import { Upload, NoteMaster, AddressMaster, AgentMaster, TestMaster, OrderMaster, COLORLIST } from './../shared/shared.model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    // animations: [routerTransition()],
    providers: []
})
export class CartComponent implements OnInit, OnChanges {

    constructor(public sharedServ: SharedService, public rtr: Router) {

    }

    public newOrderList: OrderMaster[] = [];

    ngOnChanges() {

    }

    ngOnInit() {
        this.sharedServ.getMasterData("test");
        this.sharedServ.getMasterData("address");
        this.sharedServ.getMasterData("agent");
        this.sharedServ.getMasterData("order");
        this.newOrderList.push(new OrderMaster());
    }

    public addNewOrder() {
        this.newOrderList.push(new OrderMaster())
    }

    public checkoutOrder() {
        this.sharedServ.showProgressBar = true;
        this.newOrderList.forEach(element => {
            if (element.isChecked && element.addressKey && element.testKey) {
                element.agentKey = this.getAgentCodeForPincode(this.getPinCodeForAdress(element.addressKey));
                this.sharedServ.addNewOrder(element);
            }
        })
        setTimeout(() => {
            this.rtr.navigate(['order']);
            this.sharedServ.showProgressBar = false;
        }, 3000);
    }

    public getPinCodeForAdress(key: string) {
        return this.sharedServ.addressList.filter(address => address.$key == key)[0].pincode;
    }

    public getAgentCodeForPincode(pincode: Number) {
        let _agentList: AgentMaster[] = this.sharedServ.agentList.filter(agent => pincode >= agent.pincodeRangeFrom && pincode <= agent.pincodeRangeTo);
        if (_agentList.length) {
            return _agentList[0].$key;
        }
        return "default";
    }
}
