import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
    Query,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { TasksService } from './tasks.service';
  import { Task } from './entity/task.entity';
  import { CreateTaskDto } from './dto/create-task.dto';
  import { UpdateTaskDto } from './dto/update-task.dto';
  import { TaskStatus } from './entity/task.entity';
  
  @Controller('tasks')
  export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
  
    @Get()
    getAllTasks(@Query('status') status?: TaskStatus): Promise<Task[]> {
      return this.tasksService.findAll(status);
    }
  
    @Get(':id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
      return this.tasksService.findOne(id);
    }
  
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
      return this.tasksService.create(createTaskDto);
    }
  
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    updateTask(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateTaskDto: UpdateTaskDto,
    ): Promise<Task> {
      return this.tasksService.update(id, updateTaskDto);
    }
  
    @Delete(':id')
    removeTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return this.tasksService.remove(id);
    }
  }
  