import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { PageInfo, PaginationArgs } from './pagination.args';
import { Book } from '../entities/book.entity';

@ArgsType()
export class GetBooksArgs extends PaginationArgs {
  @Field({ nullable: true })
  name?: string;
}

@ObjectType()
export class BooksResult {
  @Field(() => [Book])
  books: Book[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
