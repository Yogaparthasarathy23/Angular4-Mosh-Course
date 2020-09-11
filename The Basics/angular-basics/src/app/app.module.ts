import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SuccessAlert } from "./SuccessAlert/SuccessAlert.component";
@NgModule({
  declarations: [AppComponent, SuccessAlert],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
