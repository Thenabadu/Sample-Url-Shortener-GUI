import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UrlResponse } from 'src/app/model/urlResponse/url-response';

@Component({
  selector: 'app-generated-url',
  templateUrl: './generated-url.component.html',
  styleUrls: ['./generated-url.component.css']
})

export class GeneratedUrlComponent implements OnInit,OnChanges {

  @Input() urlResponseMessage:UrlResponse;

  constructor() {
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['urlResponseMessage']) {
      console.log(this.urlResponseMessage)
  }
  }

  ngOnInit(): void {
    console.log(this.urlResponseMessage)
  }

  goToLink(){
    window.open(this.urlResponseMessage.url, "_blank");
  }

}
