export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export interface CreateTaskRequest {
  title: string;
  description: string;
}