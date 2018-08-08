import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mainTitle = new BehaviorSubject<string>('');
  MainTitle = this.mainTitle.asObservable();
  constructor() {  }

  setTitle(title){
    this.mainTitle.next(title);
  }
}
