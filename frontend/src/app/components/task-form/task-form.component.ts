import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskTitle = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.taskTitle.trim()) {
      this.taskService.addTask(this.taskTitle).subscribe(() => {
        this.taskTitle = '';
      });
    }
  }
}
