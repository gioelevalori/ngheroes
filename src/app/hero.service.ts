import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';

import {BackendService, HEROES} from './backend.service';

@Injectable({ providedIn: 'root' })
export class HeroService {


  constructor(private service: BackendService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.service.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.service.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
