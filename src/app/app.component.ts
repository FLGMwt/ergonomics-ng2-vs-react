import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Click one of the things';

  numbers = [1, 2, 3, 4, 5];

  handleClick(number) {
    this.title = `You clicked ${number}`;
  }
}
