import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [
    {
        path: ':master-type',
        component: MasterComponent,
    },
    //  {
    //     path: '',
    //     redirectTo: 'master/address'
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule { }
