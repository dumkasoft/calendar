import { Component, OnInit } from "@angular/core";
import { NewsService } from "./news.service";

@Component({
    selector: "news-feed",
    template: `
        <div *ngFor="let item of items">
            <div>{{item.date | date: "dd.MM.yyyy"}} - {{item.title}} - {{item.message}}</div>
        </div>
    `
})
export class NewsFeedComponent implements OnInit {
    constructor(private newsService: NewsService) {

    }
    items = [];
    ngOnInit() {
        this.newsService.getNews().then(items => this.items = items);
    }
}