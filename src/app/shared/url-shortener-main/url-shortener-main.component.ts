import { Component, OnInit } from '@angular/core';
import { Url } from 'src/app/model/url/url';
import { UrlResponse } from 'src/app/model/urlResponse/url-response';
import { ShortenerService } from 'src/app/service/shortener.service';
import { GeneratedUrlComponent } from '../generated-url/generated-url.component';

@Component({
  selector: 'app-url-shortener-main',
  templateUrl: './url-shortener-main.component.html',
  styleUrls: ['./url-shortener-main.component.css']
})
export class UrlShortenerMainComponent {

  isDisplaySubmitBtn: boolean;
  isUserInputlValidUrl :boolean;
  errorMessage:String = "Unable to shorten that link. It is not a valid url.";
  url:Url;
  urlValue:string;
  currentItem:UrlResponse;


  constructor(private shortenerService: ShortenerService) {
    this.isUserInputlValidUrl = true;
    this.isDisplaySubmitBtn = true;
    this.url = new Url();
    this.urlValue = ""; 
    this.currentItem = new UrlResponse();
   }

  onSubmit() {  
    this.url.url= this.urlValue;
    this.url.activePeriod = 1;
    this.url.expireStatus = 0;
    
    console.log(this.url);
    
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (!regexp.test(this.url.url)) {
      this.isUserInputlValidUrl = false;
    }else{
      this.isUserInputlValidUrl = true;
      this.shortenerService.generateURL(this.url).subscribe((result: UrlResponse) => {
        this.currentItem = result;
        this.urlValue = result.shortUrl;
        this.isDisplaySubmitBtn = false;
        console.log(result);
    });
    }
  }

  onSearchChange(searchValue: string): void {  
    if(!this.isUserInputlValidUrl){
      this.isUserInputlValidUrl = true;
    }
    this.isDisplaySubmitBtn = true;
  }

  copyMessage(){
    navigator.clipboard.writeText(this.urlValue).then().catch(e => console.error(e));
  }
}