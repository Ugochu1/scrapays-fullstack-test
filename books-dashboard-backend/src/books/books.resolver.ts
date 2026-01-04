import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './models/book.model';
import { BooksService } from './books.service';
import { GetBooksArgs } from './dto/get-books.args';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => Book, {
    name: 'book',
    description: 'Get single book from the database',
  })
  async getBook(@Args('id', { type: () => Int }) id: number) {
    // return found book
    return await this.booksService.findOneById(id);
  }

  @Query(() => [Book], {
    name: 'books',
    description: 'Get a list of books based on name',
  })
  async getBooks(@Args() args: GetBooksArgs) {}

  @Mutation(() => Book, {
    name: 'create-book',
    description: 'Create a book in our database',
  })
  async createBook() {}

  @Mutation(() => Book, {
    name: 'edit-book',
    description: 'Edit a book in our database',
  })
  async editBook() {}

  @Mutation(() => Book, {
    name: 'delete-book',
    description: 'Delete a book in the database',
  })
  async deleteBook() {}
}
