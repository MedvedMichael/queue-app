import { QueueService } from 'src/app/services/queue.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { QueueComponent } from './components/queue/queue.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AboutPageComponent,
    QueueComponent,
    UserCardComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QueueService],
  bootstrap: [AppComponent],
})
export class AppModule {}
