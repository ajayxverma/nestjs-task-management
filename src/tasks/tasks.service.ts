import { Injectable } from '@nestjs/common';
import { Task, TaskStatus} from './tasks.model';
import { v4 as uuid} from 'uuid';


@Injectable()
export class TasksService {
  


   
    
    private tasks: Task[]= [];

    getTask():Task[] {
        return this.tasks;
    }

    createTask(title: String, description: String): Task {

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }

    getTaskById(id:String) : Task {

        return this.tasks.find((task) => task.id === id);       
    }

    deleteTaskbyId(id: String): void {

         this.tasks = this.tasks.filter( (task) => task.id !== id);
        
    }
    
    updateTaskStatus(id: String, status: TaskStatus): Task {

        const task = this.getTaskById(id);
        task.status = status;
        return task;
        
    }


}
