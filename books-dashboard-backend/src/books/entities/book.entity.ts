import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('books')
export class Book {
  @Field(() => Int, { description: 'The unique identifier for a book' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'The name of a book' })
  @Column()
  name: string;

  @Field({ description: 'The description of a book' })
  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  normalize() {
    if (this.name) {
      this.name = this.name.toLowerCase();
    }
    if (this.description) {
      this.description = this.description.toLowerCase();
    }
  }
}
