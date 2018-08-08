import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  mainTitle = ''
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.MainTitle.subscribe(res => this.mainTitle = res);
    this._data.setTitle("SendBlaster Tutorials");
  } 

}
