import { Body, Controller, Delete, Get,Param,Patch,Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { get } from 'http';
import { Task, TaskStatus } from './tasks.model';
import { title } from 'process';
import { stat } from 'fs';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { 
    }

    @Get()
    getAllTask(): Task[] {
        return this.taskService.getTask();
    }

    @Get('/:id')
    getTaskById(@Param('id') id:String) : Task{
        
        return this.taskService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTaskbyId(@Param('id') id:String) :void {
        return this.taskService.deleteTaskbyId(id);
    }

    @Patch('/:id/status')
    updateTask( @Param('id') id:String, @Body('status') status:TaskStatus): Task {
         return this.taskService.updateTaskStatus(id,status);
    }

    @Post()
    createTask(@Body('title') title: String, @Body('description') description: String ): Task {

        return this.taskService.createTask(title,description);
        //return this.taskService.createTask(body);

    }

}
