package com.tcs.task.service;

import java.util.List;

import com.tcs.task.dto.TaskRequest;
import com.tcs.task.dto.TaskResponse;

public interface TaskService {

	 TaskResponse createTask(TaskRequest request);

	 List<TaskResponse> getAllTasks();
	    
}
