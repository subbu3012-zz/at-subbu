import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatExpansionModule,
        CommonModule,
        OrderRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ],
    declarations: [OrderComponent],
    providers: []
})
export class OrderModule { }
