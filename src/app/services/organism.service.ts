import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = '/api';

export interface Organism {
  ID: string,
  Name: string,
  Parent: number
}

export interface OrganismResponse {
  data: Organism[]
}

@Injectable({
  providedIn: 'root'
})
export class OrganismService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<OrganismResponse> {
    return this.httpClient.get<OrganismResponse>(baseURL);
  }

}
