import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernamesService {
  validUsernames = ['hello', 'world', 'username'];

  constructor() {}

  lookupUsername(username: string): Observable<boolean> {
    // normally, this is where you will connect to your backend for validation lookup
    // using http, we simulate an internet connection by delaying it by a second
    return of(this.validUsernames.includes(username)).pipe(delay(1000));
  }
}
