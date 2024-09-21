import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private http: HttpClient) { }

  // getSecurityData(email: string) {
  //   this.http.get()
  // }
}
