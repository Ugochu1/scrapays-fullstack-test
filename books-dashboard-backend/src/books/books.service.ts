import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [];

  async findOneById(id: number) {}

  findAll() {}

  create() {}

  edit(id: number) {
    console.log(id);
  }

  delete(id: number) {
    console.log(id);
  }
}
