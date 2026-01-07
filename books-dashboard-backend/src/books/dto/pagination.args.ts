import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, {
    description: 'The current page',
    defaultValue: 1,
  })
  page: number;

  @Field(() => Int, {
    description: 'The number of items to fetch at a time',
    defaultValue: 10,
  })
  limit: number;
}

@ObjectType()
export class PageInfo {
  @Field({ description: 'Returns if data has a next page' })
  hasNextPage: boolean;

  @Field(() => Int, { description: 'Returns total number of found documents' })
  totalCount: number;

  @Field(() => Int, {
    description: 'Returns total number of pages i.e totalCount / limit',
  })
  totalPages: number;

  @Field(() => Int, { description: 'Returns current page' })
  page: number;

  @Field(() => Int, { description: 'The number of items to fetch at a time' })
  limit: number;
}
