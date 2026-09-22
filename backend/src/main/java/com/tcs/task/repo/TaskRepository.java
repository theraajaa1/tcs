package com.tcs.task.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tcs.task.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
