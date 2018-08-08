import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  mainTitle = ''
  constructor(private _data: DataService) { }

  ngOnInit() {
     this._data.MainTitle.subscribe(res => this.mainTitle = res);
  } 
}
