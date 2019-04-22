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

  get_prediction(customer, arr, assets, industry, theatre, is_cloud, chs) {
    return this.http.post<any>(this.url + '/predict', { customer: customer, arr : arr, assets : assets, industry: industry, theatre : theatre, is_cloud : is_cloud, chs : chs})
      .pipe(map(result => {
        return result;
      }));
  }

  getDiseaseList(diseaseName:String){
   return this.http.post('http://localhost:5000/get_disease',diseaseName);
  }

}
