import { Component, Injector } from '@angular/core';
import { TestdirDirective } from '../testdir.directive';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [TestdirDirective],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {
  constructor(injector: Injector) {
    console.log('comp1 injector', injector);
  }
}
