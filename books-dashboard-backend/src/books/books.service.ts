import { Injectable } from '@nestjs/common';

type ID = string | number;

@Injectable()
export class BooksService {
  findById(id: ID) {
    console.log(id);
  }

  findAll() {}

  create() {}

  edit(id: ID) {
    console.log(id);
  }

  delete(id: ID) {
    console.log(id);
  }
}
