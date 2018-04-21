import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService {
    users = [];
    users$;

    constructor(private http: HttpClient) {
        this.users$ = this.http.get('https://randomuser.me/api/?results=6');
        this.users$.subscribe(data => this.users = data);
    }

    getContacts() {
        return this.users.length === 0 ? this.users$ : Observable.of(this.users);
    }
}

