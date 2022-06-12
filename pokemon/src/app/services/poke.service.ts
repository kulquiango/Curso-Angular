import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private url: string = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {}
  getList(page: number = 0) {
    // return this.http.get(`${this.url}pokemon?offset=${page}&limit=20`)
    //son lo mismo
    return this.http.get(`${this.url}pokemon`, {
      params: {
        offset: page,
        limit: 150,
      },
    });
  }

  getPokeData(name: string) {
    return this.http.get(`
    ${this.url}pokemon/${name}`);
  }
}
