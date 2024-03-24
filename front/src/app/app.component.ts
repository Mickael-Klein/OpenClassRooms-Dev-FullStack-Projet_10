import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './model/joke.model';
import { JokesService } from './services/jokes.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>{{ joke }}</p>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  joke: string;

  constructor() {
    // Exemple de faille XSS
    this.joke = '<script>alert("Vous avez été piraté !")</script>';
  }
}

