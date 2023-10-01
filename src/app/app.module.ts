import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add BrowserAnimationsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { SubjectFormComponent } from './subject-form/subject-form.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    SubjectFormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, // Add Angular Material modules
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
