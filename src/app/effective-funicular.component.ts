import { Component } from '@angular/core';
import { AboutComponent } from './+about';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ContactComponent } from './+contact';
import { HomeComponent } from './+home';

@Component({
  moduleId: module.id,
  selector: 'effective-funicular-app',
  templateUrl: 'effective-funicular.component.html',
  styleUrls: ['effective-funicular.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '/contact', component: ContactComponent}
])
export class EffectiveFunicularAppComponent {

    title = 'Effective Funicular Demo SPA';

    constructor() {

    }
}
