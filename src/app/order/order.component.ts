import { Component, ElementRef, NgZone, OnInit, ViewChild, OnChanges } from '@angular/core';
import { SharedService } from './../shared/shared.service';
import { Upload, NoteMaster, AddressMaster, AgentMaster, AgentVsOrderMaster, OrderMapMaster, TestMaster, OrderMaster, COLORLIST } from './../shared/shared.model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    // animations: [routerTransition()],
    providers: []
})
export class OrderComponent implements OnInit, OnChanges {

    constructor(public sharedServ: SharedService) {

    }

    public agentVsOrderMasterData: AgentVsOrderMaster[] = [];

    ngOnChanges() {

    }

    ngOnInit() {
        this.sharedServ.getMasterData("test");
        this.sharedServ.getMasterData("address");
        this.sharedServ.getMasterData("agent");
        this.sharedServ.getMasterData("order");
        setTimeout(() => {
            this.constructAgentVsOrderData();
        }, 5000);
    }

    public constructAgentVsOrderData() {
        this.sharedServ.agentList.forEach(element => {
            this.agentVsOrderMasterData.push({
                "agentKey": element.$key,
                "agentName": this.sharedServ.getAgentName(element.$key),
                "orderList": this.getOrderMapDataForAgent(element.$key)
            });
        })
        console.log('this.agentVsOrderMasterData', this.agentVsOrderMasterData);
    }

    public getOrderMapDataForAgent(agentKey: string) {
        let _orderList: OrderMapMaster[] = [];
        this.sharedServ.orderList.filter(order => order.agentKey == agentKey).forEach(order => {
            _orderList.push({
                "testName": this.sharedServ.getTestName(order.testKey),
                "addressName": this.sharedServ.getAddressName(order.addressKey),
                "createdDate": order.createdDate
            })
        });
        return _orderList;
    }


}
