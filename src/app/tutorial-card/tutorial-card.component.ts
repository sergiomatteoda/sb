import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-card',
  templateUrl: './tutorial-card.component.html',
  styleUrls: ['./tutorial-card.component.scss']
})
export class TutorialCardComponent implements OnInit {
  @Input() backgroundcolor : string;
  @Input() imageurl : string;
  @Input() routerLink : string;
  @Input() title : string;
  @Input() desc : string;
  @Input() level: string;

  get backgroundimageurl():string{
    return "url("+this.imageurl+")";
  }

  constructor() { 
  
  }

  ngOnInit() {
  }

}
