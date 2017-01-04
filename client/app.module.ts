import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule }    from '@angular/http';

import { AppLayoutComponent } from "./app.component";
import { NewsFeedComponent } from "./public/news/news.component";
import { NewsService } from "./public/news/news.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppLayoutComponent,
        // public components
        NewsFeedComponent
    ],
    providers: [
        NewsService
    ],
    bootstrap: [ AppLayoutComponent ]
})
export class AppModule {}