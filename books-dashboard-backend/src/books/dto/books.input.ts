import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewBookInput {
  @Field()
  name: string;

  @Field()
  description: string;
}

@InputType()
export class UpdateBookInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;
}
