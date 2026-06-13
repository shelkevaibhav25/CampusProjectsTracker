import { inject, Injectable } from '@angular/core';
import { UserLogin } from '../models/classes/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  http = inject(HttpClient)
  apiUrl:string = environment.API_URL


  login(obj:UserLogin){
    return this.http.post(`${this.apiUrl}${GlobalConstant.API_ENDPOINTS.LOGIN}`, obj)
  }
}
