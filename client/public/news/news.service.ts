import { Injectable  } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { News } from './news.model';

@Injectable()
export class NewsService {

    private newsUrl = 'http://localhost:1337/api/news';

    constructor(private http: Http) {}
    
    getNews(): Promise<News[]> {
        return this.http.get(this.newsUrl)
            .toPromise()
            .then(response => { console.log(response.json()); return response.json() as News[]; })
            .catch(this.handleError);
        //return Promise.resolve([ {id: 1, date: new Date('2017-01-01'), title: "Let's get started", message: "Some good news here" } ]);
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

} 
