import { Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { ModifierComponent } from './modifier/modifier.component';

export const routes: Routes = [
    { path: '', component: BuilderComponent },
    { path: 'modifier/:id', component: ModifierComponent }  
];
