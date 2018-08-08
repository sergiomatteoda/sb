import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mainTitle = ''
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.MainTitle.subscribe(res => this.mainTitle = res);
    this._data.setTitle("Wellcome to SendBlaster Tutorials");    
  }

}
