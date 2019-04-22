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
    return this.http.post<any>(this.url + '/get_diseases', { part: part, type : type, topic : topic})
      .pipe(map(result => {
        return result;
      }));
  }

  getDiseaseList(diseaseName:String){
   return this.http.post('http://localhost:5000/get_disease',diseaseName);
  }

}
