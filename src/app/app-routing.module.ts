import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NannyShareComponent } from './nanny-share/nanny-share.component';

const routes: Routes = [
	{ path: 'nannyshare', component: NannyShareComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
