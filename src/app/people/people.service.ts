import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  public getPeople(params: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer TjUVdA1QOATIwiZ7Cp`);
    return this.http.post(`${env.api}person/search`, params, { headers });
  }
}
