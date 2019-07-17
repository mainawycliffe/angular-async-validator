import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';

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

  userValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return this.lookupUsername(control.value).pipe(
        map(res => {
          console.log(res);
          // if res is true, username exists, return true
          return res ? { usernameExists: true } : null;
          // NB: Return null if there is no error
        })
      );
    };
  }
}
