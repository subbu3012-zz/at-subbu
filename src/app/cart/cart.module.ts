import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatCheckboxModule,
        CommonModule,
        CartRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ],
    declarations: [CartComponent],
    providers: []
})
export class CartModule { }
