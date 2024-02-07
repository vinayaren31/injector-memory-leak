import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestdirDirective } from './testdir.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TestdirDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
