import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityData } from '../models/security.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private http: HttpClient) { }

  getSecurityData(email: string): Observable<SecurityData> {
    return this.http.get<SecurityData>(`/api/${email}?summary=true`);
  }

  getDummySecurityData(): Observable<SecurityData> {
    return this.http.get<SecurityData>('files/output.json');
  }  
}
