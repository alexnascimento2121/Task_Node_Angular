import { Component } from '@angular/core';
import { TaskFormComponent } from "./components/task-form/task-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskFormComponent]
})
export class AppComponent {
  title = 'frontend';
}
