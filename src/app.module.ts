import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Update if different
      port: 5432,        // Default PostgreSQL port
      username: 'postgres',
      password: '12345678',
      database: 'task_management_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
    }),
    TasksModule,
  ],
})
export class AppModule {}
