import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './books.service';
import { Book } from '../entities/book.model';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BooksService]
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all books', (done) => {
    service.getItems().subscribe(
      books => {
        console.log('====================');
        console.log('books:', books);
        console.log(books.length);
        expect(books.length).toBeGreaterThan(0);
        done();
      },
      error => {
        console.error('Error fetching books:', error);
        done.fail('Failed due to network error');
      }
    );
  });

});
