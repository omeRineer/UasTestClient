import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessToken } from 'src/app/models/Token/accessToken';
import { LoginResponse } from 'src/app/models/Auth/loginResponse';
import { HttpClientService } from './http-client.service';
import { LoginUser } from 'src/app/models/Auth/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClientService:HttpClientService) { }

  login(loginUser?:Partial<LoginUser>):Observable<LoginResponse>{
    return this.httpClientService.post<any | LoginResponse>({
      controller:"auth",
      action:"login"
    },loginUser)
  }
}
