import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        MatInputModule, MatButtonModule, MatIconModule,
        CommonModule,
        MasterRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ],
    declarations: [MasterComponent],
    providers: []
})
export class MasterModule { }
