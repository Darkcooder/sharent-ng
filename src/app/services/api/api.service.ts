import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as ApiConfig from '../../../../api.config.json';


@Injectable({
  providedIn: 'root'
})
class ApiService {

  private baseUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.baseUrl = ApiConfig.apiUrl;
  }

  public execute(url: string, method: ApiMethod, request: any): Observable<any> {
    if (method === ApiMethod.Get) {
      return this.http.get(this.baseUrl + url, {params: request, headers: this.headers});
    } else if (method === ApiMethod.Post) {
      return this.http.post(this.baseUrl + url, request, {headers: this.headers});
    } else if (method === ApiMethod.Put) {
      return this.http.put(this.baseUrl + url, request, {headers: this.headers});
    } else if (method === ApiMethod.Delete) {
      return this.http.delete(this.baseUrl + url, {params: request, headers: this.headers});
    }
  }
}

enum ApiMethod {Get, Post, Put, Delete}

export {ApiService, ApiMethod};
