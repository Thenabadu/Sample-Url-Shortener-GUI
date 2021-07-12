import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../model/url/url';
import {UrlResponse} from '../model/urlResponse/url-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  private urlShortenApiUrl: string;

  constructor(private http: HttpClient) {
    this.urlShortenApiUrl = environment.serverUrl+'/api/v01/url';
  }

  public generateURL(url: Url):Observable<UrlResponse> {
    return this.http.post<UrlResponse>(this.urlShortenApiUrl, url);
  }
}