import { Component, Injector } from '@angular/core';
import { TestdirDirective } from '../testdir.directive';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [TestdirDirective],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component {
  constructor(injector: Injector) {
    console.log('comp2 injector', injector);
  }
}
