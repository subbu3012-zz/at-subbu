import { Component, ElementRef, NgZone, OnInit, ViewChild, OnChanges } from '@angular/core';
import { SharedService } from './../shared/shared.service';
import { Upload, NoteMaster, AddressMaster, AgentMaster, TestMaster, OrderMaster, COLORLIST } from './../shared/shared.model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.scss'],
    // animations: [routerTransition()],
    providers: []
})
export class MasterComponent implements OnInit, OnChanges {

    public masterType;
    public colorList: string[] = COLORLIST;

    public newAddressMaster: AddressMaster = new AddressMaster();
    public newAgentMaster: AgentMaster = new AgentMaster();
    public newTestMaster: TestMaster = new TestMaster();

    public noteList: NoteMaster[] = [];
    public uploadFile = new Upload();

    constructor(private route: ActivatedRoute, private router: Router, public sharedServ: SharedService) {

    }

    ngOnChanges() {
        this.masterType = this.route.snapshot.paramMap.get('master-type');
        // this.getMasterData();
    }

    ngOnInit() {
        this.masterType = this.route.snapshot.paramMap.get('master-type');
        this.sharedServ.getMasterData(this.masterType);
        this.route.paramMap.switchMap((params: ParamMap) =>
            this.masterType = params.get('master-type')
        );
    }

    public addMasterData() {
        switch (this.masterType) {
            case "agent":
                this.sharedServ.addNewAgent(this.newAgentMaster);
                this.newAgentMaster = new AgentMaster();
                break;
            case "test":
                this.sharedServ.addNewTest(this.newTestMaster);
                this.newTestMaster = new TestMaster();
                break;
            case "address":
                this.sharedServ.addNewAddress(this.newAddressMaster);
                this.newAddressMaster = new AddressMaster();
                break;
        }
    }
}
