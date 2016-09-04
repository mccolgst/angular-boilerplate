import { 
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  Output
} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-app',
  template: require('./app.component.html'),
  styles: [require('./app.scss').toString()],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {

  constructor() {}

}
