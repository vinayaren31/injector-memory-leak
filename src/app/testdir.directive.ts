import { Directive } from '@angular/core';

@Directive({
  selector: '[appTestdir]',
  standalone: true
})
export class TestdirDirective {

  constructor() {
    console.log('directive')
  }

}
