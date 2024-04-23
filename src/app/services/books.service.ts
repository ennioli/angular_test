import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../entities/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public booksUrl = 'assets/books.json'; 

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
}
