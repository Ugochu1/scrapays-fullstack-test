import { ArgsType, Field } from '@nestjs/graphql';
import { PaginationArgs } from './pagination.args';

@ArgsType()
export class GetBooksArgs extends PaginationArgs {
  @Field({ nullable: true })
  name?: string;
}
