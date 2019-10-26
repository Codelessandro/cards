import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {ClickService} from "../click.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  clicked: Boolean = false;
  clickedLate:Boolean=false;
  @Input() text: string;
  @Input() vers: string;
  @Input() index:any;
  @Input() male:boolean;
  @Input() clickedAlready:boolean = false;

  constructor(private clickService: ClickService, private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  animate() {

    this.clickService.click(() => {
      this.clicked = true;
      setTimeout(() => {
          this.clickedLate = true;
        }, 1000
      )
    })





  }


}
