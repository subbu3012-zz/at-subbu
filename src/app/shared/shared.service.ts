import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { AngularFireDatabase, AngularFireList, } from 'angularfire2/database';
import { Upload, NoteMaster, AddressMaster, AgentMaster, TestMaster, OrderMaster } from './shared.model';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2'
import { MatSnackBar } from '@angular/material';
import 'firebase/storage';


@Injectable()
export class SharedService {

    public showProgressBar: boolean = false;

    agentAFList: AngularFireList<any>;
    testAFList: AngularFireList<any>;
    addressAFList: AngularFireList<any>;
    orderAFList: AngularFireList<any>;

    public tempList: any[] = [];
    public agentList: AgentMaster[] = [];
    public testList: TestMaster[] = [];
    public addressList: AddressMaster[] = [];
    public orderList: OrderMaster[] = [];

    constructor(public snackBar: MatSnackBar, public firebaseApp: FirebaseApp, private http: HttpClient, private firebaseDB: AngularFireDatabase) {

    }


    public getMasterData(masterType: string) {
        var x = this.getList(masterType);
        x.snapshotChanges().subscribe(item => {
            this.tempList = [];
            item.forEach(element => {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                this.tempList.unshift(y)
            });
            switch (masterType) {
                case "agent":
                    this.agentList = this.tempList;
                    break;
                case "test":
                    this.testList = this.tempList;
                    break;
                case "address":
                    this.addressList = this.tempList;
                    break;
                case "order":
                    this.orderList = this.tempList;
                    break;
            }
            console.log(this.agentList)
        });
    }

    getList(listMaster: string) {
        console.log('called ', listMaster)
        this.showProgressBar = true;
        setTimeout(() => {
            this.showProgressBar = false;
        }, 2000);
        switch (listMaster) {
            case "agent":
                this.agentAFList = this.firebaseDB.list('agentList/');
                return this.agentAFList
            case "test":
                this.testAFList = this.firebaseDB.list('testList/');
                return this.testAFList
            case "address":
                this.addressAFList = this.firebaseDB.list('addressList/');
                return this.addressAFList
            case "order":
                this.orderAFList = this.firebaseDB.list('orderList/');
                return this.orderAFList
        }
    }

    addNewAddress(address: AddressMaster) {
        this.addressAFList.push({
            name: address.name,
            mobileNo: address.mobileNo,
            addressLine1: address.addressLine1,
            addressLine2: address.addressLine2,
            city: address.city,
            pincode: address.pincode,
            createdDate: new Date().toString()
        });
    }

    addNewAgent(agent: AgentMaster) {
        this.agentAFList.push({
            name: agent.name,
            mobileNo: agent.mobileNo,
            pincodeRangeFrom: agent.pincodeRangeFrom,
            pincodeRangeTo: agent.pincodeRangeTo,
            createdDate: new Date().toString()
        })
    }

    addNewTest(test: TestMaster) {
        this.testAFList.push({
            name: test.name,
            desc: test.desc,
            cost: test.cost,
            createdDate: new Date().toString()
        })
    }

    addNewOrder(order: OrderMaster) {
        this.orderAFList.push({
            testKey: order.testKey,
            agentKey: order.agentKey,
            addressKey: order.addressKey,
            createdDate: new Date().toString()
        })
    }

    public openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    public getTestName(key: string) {
        return this.testList.filter(test => test.$key == key)[0].name;
    }

    public getAddressName(key: string) {
        return this.addressList.filter(address => address.$key == key)[0].name;
    }

    public getAgentName(key: string) {
        return this.agentList.filter(agent => agent.$key == key)[0].name;
    }
}
