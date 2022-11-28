import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) {
  }

  private url(requestParameters: Partial<RequestParameters>): string {
      if (requestParameters.fullEndPoint)
          return requestParameters.fullEndPoint;
      else
          return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ""}`; //requestParameters.baseUrl doluysa 
  }

  get<T>(requestParameters: Partial<RequestParameters>, id?: string): Observable<T> {
      let url: string = "";

      url = `${this.url(requestParameters)}${id ? `/${id}` : ""}`;

      return this.httpClient.get<T>(url, { headers: requestParameters.headers });
  }

  post<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
      let url: string = "";
      url = `${this.url(requestParameters)}`;

      return this.httpClient.post<T>(url, body, { headers: requestParameters.headers });
  }

  put<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
      let url: string = "";
      url = `${this.url(requestParameters)}`;


      return this.httpClient.put<T>(url, body, { headers: requestParameters.headers });
  }

  delete() { }
}

export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}