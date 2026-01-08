import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { ILike, Repository } from 'typeorm';
import { BooksResult, GetBooksArgs } from './dto/get-books.args';
import { NewBookInput, UpdateBookInput } from './dto/books.input';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async findOneById(id: number): Promise<Book | null> {
    return this.booksRepository.findOneBy({ id });
  }

  async find({ name, page, limit }: GetBooksArgs): Promise<BooksResult> {
    const offset = (page - 1) * limit;

    const [books, totalCount] = await this.booksRepository.findAndCount({
      where: name ? { name: ILike(`%${name}%`) } : {}, // if name is passed, search by name else find all
      take: limit,
      skip: offset,
      order: { createdAt: 'desc' },
    });

    const totalPages = Math.ceil(totalCount / limit);

    return {
      books,
      pageInfo: {
        hasNextPage: page < totalPages,
        totalCount,
        totalPages,
        page,
        limit,
      },
    };
  }

  async create({ name, description }: NewBookInput): Promise<Book> {
    // create new user object
    const newUser = this.booksRepository.create({ name, description });
    // save new user to database and return user
    return this.booksRepository.save(newUser);
  }

  async update({ id, name, description }: UpdateBookInput): Promise<Book> {
    const book = await this.booksRepository.findOneBy({ id });

    if (!book) throw new NotFoundException('Book not found');

    // update book object name if intended
    if (name) book.name = name;
    // update book object description if intended
    if (description) book.description = description;

    // save updated book to the database
    return this.booksRepository.save(book);
  }

  async delete(id: number): Promise<Book> {
    // find book to delete
    const bookToDelete = await this.findOneById(id);

    // if it doesn't exist, throw exception
    if (!bookToDelete) throw new NotFoundException('Book not found');
    // get book id
    const bookToDeleteId = bookToDelete.id;

    // if it does, remove it from db and return
    await this.booksRepository.remove(bookToDelete);
    // add the id back to bookToDelete
    bookToDelete.id = bookToDeleteId;
    return bookToDelete;
  }
}
