import { IsOptional, IsString, IsEnum } from 'class-validator';
import { TaskStatus } from '../entity/task.entity';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(['pending', 'in progress', 'completed'])
  status?: TaskStatus;
}
