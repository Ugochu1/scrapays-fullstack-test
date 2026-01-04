import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, {
    description: 'The number of items to skip before fetching',
  })
  offset: number = 0;

  @Field(() => Int, { description: 'The number of items to fetch at a time' })
  limit: number = 20;
}
