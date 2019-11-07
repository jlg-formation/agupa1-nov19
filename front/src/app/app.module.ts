import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';
import { QuizzPlayModule } from './quizz-play/quizz-play.module';
import { QuizzService } from './service/quizz.service';
import { HttpQuizzService } from './service/http-quizz.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    MainModule,
    QuizzCreateModule,
    QuizzPlayModule,
    HttpClientModule,
  ],
  providers: [{ provide: QuizzService, useClass: HttpQuizzService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
