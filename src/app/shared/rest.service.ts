import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestService {

  public headers: HttpHeaders;
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000';
  }

  get_diseases(part, type, topic) {
    return this.http.post<any>(this.url + '/get_disease', { part: part, type : type, topic : topic})
      .pipe(map(result => {
        return result;
      }));
  }

  get_map(part, type, topic) {
    return this.http.post<any>(this.url + '/get_map', { part: part, type : type, topic : topic})
      .pipe(map(result => {
        console.log(result)
        return result;
      }));
  }

  get_network(key) {
    return this.http.post<any>(this.url + '/get_network', { topic: key})
      .pipe(map(result => {
        return result;
      }));
  }

  get_word_cloud(key) {
    return this.http.post<any>(this.url + '/get_word_cloud', { topic: key})
      .pipe(map(result => {
        return result;
      }));
  }

}
