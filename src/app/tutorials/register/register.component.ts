import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../app.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.setTitle("Registering SendBlaster Free Edition");   
  }

}
