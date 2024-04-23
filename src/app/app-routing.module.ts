import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

const routes: Routes = [
  // { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'book', component: BookEditComponent },
  { path: 'book/:id', component: BookEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
