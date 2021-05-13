import { Injectable, Type } from '@angular/core';


import { Hero } from './hero';

export const HEROES = [
        new Hero('Windstorm', 'Weather mastery'),
        new Hero('Dr Nice', 'Killing them with kindness'),
        new Hero('Magneta', 'Manipulates metallic objects'),
        new Hero('Bombasto', 'Weather mastery'),
        new Hero('Celeritas', 'Killing them with kindness'),
        new Hero('RubberMan', 'Manipulates metallic objects'),
        new Hero('Dynama', 'Weather mastery'),
        new Hero('Dr IQ', 'Killing them with kindness'),
        new Hero('Magma', 'Manipulates metallic objects'),
        new Hero('Tornado', 'Weather mastery'),


      ];

@Injectable()
export class BackendService {


  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Hero) {
      // TODO: get from the database
      return Promise.resolve<Hero[]>(HEROES);
    }
    const err = new Error('Cannot get object of this type');
    throw err;
  }

  add(heroServiceFetchedHeroes: string) {

  }
}
