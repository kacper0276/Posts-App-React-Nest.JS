import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: boolean;
}
