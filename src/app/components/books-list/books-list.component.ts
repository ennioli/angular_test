import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../entities/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  genres: string[] = [];
  selectedGenre: string = '';
  displayedColumns: string[] = ['title', 'genre', 'description']; // Add this line to the component class

  constructor(private booksService: BooksService) { }
  ngOnInit(): void {
    this.booksService.getItems().subscribe({
      next: (data) => {
        this.books = data;
        this.filteredBooks = data;
        this.genres = Array.from(new Set(data.map(book => book.genre))); // Extract genres from books
      },
      error: (err) => console.error(err)
    });
  }

  filterBooks(): void {
    if (this.selectedGenre) {
      this.filteredBooks = this.books.filter(book => book.genre === this.selectedGenre);
    } else {
      this.filteredBooks = this.books;
    }
  }
}
