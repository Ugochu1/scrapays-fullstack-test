import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { GetBooksArgs } from './dto/get-books.args';
import { NewBookInput, UpdateBookInput } from './dto/books.input';
import { Book } from './entities/book.entity';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => Book, {
    name: 'book',
    description: 'Get single book from the database',
    nullable: true,
  })
  async getBook(@Args('id', { type: () => Int }) id: number) {
    return await this.booksService.findOneById(id);
  }

  @Query(() => [Book], {
    name: 'books',
    description: 'Get a list of books based on name',
  })
  async getBooks(@Args() args: GetBooksArgs) {
    return await this.booksService.find(args);
  }

  @Mutation(() => Book, {
    name: 'add_book',
    description: 'Add a book in our database',
  })
  async addBook(@Args('newBookData') newBookData: NewBookInput) {
    return await this.booksService.create(newBookData);
  }

  @Mutation(() => Book, {
    name: 'edit_book',
    description: 'Edit a book in our database',
  })
  async editBook(@Args('editBookData') editBookData: UpdateBookInput) {
    return await this.booksService.update(editBookData);
  }

  @Mutation(() => Book, {
    name: 'delete_book',
    description: 'Delete book in the database',
    nullable: true,
  })
  async deleteBook(@Args('bookId') bookId: number) {
    return await this.booksService.delete(bookId);
  }
}
