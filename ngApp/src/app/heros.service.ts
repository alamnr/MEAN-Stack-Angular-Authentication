import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const ALTER_EGOS = ['Eric'];

@Injectable({ providedIn: 'root' })
export class HeroesService {
  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = ALTER_EGOS.includes(alterEgo);

    return of(isTaken).pipe(delay(400));
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/