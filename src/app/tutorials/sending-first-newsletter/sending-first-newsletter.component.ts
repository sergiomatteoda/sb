import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-sending-first-newsletter',
  templateUrl: './sending-first-newsletter.component.html',
  styleUrls: ['./sending-first-newsletter.component.scss']
})
export class SendingFirstNewsletterComponent implements OnInit {

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.setTitle("Sending Your First Newsletter");   
  }

}
