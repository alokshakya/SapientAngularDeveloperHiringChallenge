import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { PlatformPipe } from './filters/platform.pipe';
import { GenrePipe } from './filters/genre.pipe';
import { ReleaseYearPipe } from './filters/release-year.pipe';
import { EditorsChoicePipe } from './filters/editors-choice.pipe';
import { SortPipe } from './filters/sort.pipe';
import { TitlePipe } from './filters/title.pipe';
import { OptionsPipe } from './filters/options.pipe';
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';

import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    GameCardComponent,
    PlatformPipe,
    GenrePipe,
    ReleaseYearPipe,
    EditorsChoicePipe,
    SortPipe,
    TitlePipe,
    OptionsPipe,
    ClickedOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
