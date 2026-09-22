import { DatePipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTaskRequest, Task } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  imports: [DatePipe, ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly taskService = inject(TaskService);
  protected readonly tasks = signal<Task[]>([]);
  protected readonly loading = signal(false);
  protected readonly saving = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');

  protected readonly taskForm = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.maxLength(120)]],
    description: ['', [Validators.maxLength(500)]],
  });

  ngOnInit(): void {
    this.loadTasks();
  }

  protected loadTasks(): void {
    this.loading.set(true);
    this.errorMessage.set('');
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks.set(tasks);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load tasks. Is the Spring Boot API running?');
        this.loading.set(false);
      },
    });
  }

  protected submitTask(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    const request: CreateTaskRequest = this.taskForm.getRawValue();
    this.saving.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');
    this.taskService.createTask(request).subscribe({
      next: (task) => {
        this.tasks.update((tasks) => [task, ...tasks]);
        this.taskForm.reset();
        this.successMessage.set('Task saved successfully.');
        this.saving.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to save the task. Please check the API and try again.');
        this.saving.set(false);
      },
    });
  }
}
