import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { PokeList } from '../interface/pokeList.interface'
import { PokeData } from '../interface/pokeData.interface';

@Injectable({
	providedIn: 'root',
})
export class PokeService {
	private baseUrl: string = 'https://pokeapi.co/api/v2/'
	constructor(private http: HttpClient) {}
	get url() {
		return this.baseUrl + 'pokemon'
	}
	getList(page: number = 0) {
		// return this.http.get(`${this.url}pokemon?offset=${page}&limit=20`)
		//son lo mismo
		return this.http.get<PokeList>(`${this.baseUrl}pokemon`, {
			params: {
				offset: page,
				limit: 150,
			},
		})
	}

	getPokeData(name: string) {
		return this.http.get(`
    ${this.baseUrl}pokemon/${name}`)
	}
}
