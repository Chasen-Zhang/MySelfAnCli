import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AComponent } from './home/a/a.component';
import { BComponent } from './home/b/b.component';

import { Home2Component } from './home2/home2.component';
import { A2Component } from './home2/a2/a2.component';
import { B2Component } from './home2/b2/b2.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [{
      path: 'a',
      component: AComponent
    },{
      path: 'b',
      component: BComponent
    },{
        path: '',
        component: AComponent
    }]
  },
  { path: 'home2', component: Home2Component, children: [{
      path: 'a',
      component: A2Component
    },{
      path: 'b',
      component: B2Component
    },{
      path: '',
      component: A2Component
    }]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
