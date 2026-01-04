import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => Int, { description: 'The unique identifier for a book' })
  id: number;

  @Field({ description: 'The name of a book' })
  name: string;

  @Field({ description: 'The description of a book' })
  description: string;
}
