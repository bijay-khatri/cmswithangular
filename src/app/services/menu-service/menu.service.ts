import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {

  constructor(private http : Http) { }

  getMenu() : Observable<any>{
    return this.http.get('assets/temp.json');
  }
}