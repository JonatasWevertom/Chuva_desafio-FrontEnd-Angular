import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chuva-Desafio-FrontEnd-Angular';
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
