import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TaskStatus } from '../entity/task.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(['pending', 'in progress', 'completed'])
  status: TaskStatus;
}
