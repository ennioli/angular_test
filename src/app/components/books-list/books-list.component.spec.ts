import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksListComponent } from './books-list.component';
import { BooksService } from '../../services/books.service';
import { Book } from '../../entities/book.model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core'; // To ignore unknown elements and attributes

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;
  let mockBooksService: jasmine.SpyObj<BooksService>;
  let mockBooks: Book[];

  beforeEach(async () => {
    // Setup mock books data
    mockBooks = [
      { id: "1", title: 'Book One', genre: 'Fantasy', price: 100 },
      { id: "2", title: 'Book Two', genre: 'Science Fiction', price:200 }
    ];

    // Create a spy object with a mock method
    mockBooksService = jasmine.createSpyObj('BooksService', ['getItems']);
    mockBooksService.getItems.and.returnValue(of(mockBooks)); // Return observable with mock books

    await TestBed.configureTestingModule({
      declarations: [BooksListComponent],
      providers: [
        { provide: BooksService, useValue: mockBooksService }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Use this schema to ignore any unrecognized elements and attributes in your template
    }).compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Triggers ngOnInit()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books and genres on init', () => {
    expect(component.books.length).toBe(2);
    expect(component.genres.length).toBe(2);
    expect(component.genres).toEqual(['Fantasy', 'Science Fiction']);
  });

  it('should filter books by selected genre', () => {
    component.selectedGenre = 'Fantasy';
    component.filterBooks();
    expect(component.filteredBooks.length).toBe(1);
    expect(component.filteredBooks[0].title).toBe('Book One');
  });

  it('should return all books when no genre is selected', () => {
    component.selectedGenre = '';
    component.filterBooks();
    expect(component.filteredBooks.length).toBe(2);
  });
});
