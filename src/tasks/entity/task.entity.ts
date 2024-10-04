import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type TaskStatus = 'pending' | 'in progress' | 'completed';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending',
  })
  status: TaskStatus;
}
