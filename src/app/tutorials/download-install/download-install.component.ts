import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-download-install',
  templateUrl: './download-install.component.html',
  styleUrls: ['./download-install.component.scss', '../../app.component.scss']
})
export class DownloadInstallComponent implements OnInit {

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.setTitle("Dowloading & Installing SendBlaster");   
  }

}
