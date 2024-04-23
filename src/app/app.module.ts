import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms'; // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule to the imports json file
    FormsModule  // Include FormsModule in the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
