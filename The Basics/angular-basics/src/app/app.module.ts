import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CourseService } from "./courses.service";
import { AuthorComponent } from "./author/author.component";
import { PipeSummary } from "./summary.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    PipeSummary,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
