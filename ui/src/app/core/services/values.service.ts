import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/app.constant';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor(private appConstants: AppConstants,
    private httpClient: HttpClient) { }
  
  getStatuses(){
    return this.httpClient.get<ApiResponse>(this.appConstants.API+'values/statuses')
      .toPromise();
  }

  getPriorities(){
    return this.httpClient.get<ApiResponse>(this.appConstants.API+'values/priorities')
      .toPromise();
  }
}
