import { TestBed } from '@angular/core/testing'

import { PokeService } from './poke.service'
import { HttpClient, HttpRequest } from '@angular/common/http'
import { pokeListMock } from '../__mocks__/pokeList.mock'
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing'
import { PokeList } from '../interface/pokeList.interface'
import { pokeDataMock } from '../__mocks__/pokeData.mock';
import { PokeData } from '../interface/pokeData.interface'

describe('PokeService', () => {
	let service: PokeService
	let httpClient: HttpTestingController
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PokeService],
		})
		httpClient = TestBed.inject(HttpTestingController)
		service = TestBed.inject(PokeService)
	})

	afterEach(() => {
		httpClient.verify()
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('Deberia hacer una petición HTTP', (done: DoneFn) => {
		const url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150'
		service.getList().subscribe((response) => {
			done()
		})

		const req: TestRequest = httpClient.expectOne(url)
		expect(req.request.url).toEqual(service.url)
		expect(req.request.urlWithParams).toEqual(service.url + '?offset=0&limit=150')
		expect(req.request.method).toEqual('GET')

		req.flush({})
	})

	it('Deberia Retornar Lista De Pokemon', (done: DoneFn) => {
		const url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150'

		service.getList().subscribe((response: PokeList) => {
			expect(response).toEqual(pokeListMock)
			expect(response.results.length).toBe(8)
			done()
		})

		httpClient.expectOne(url).flush(pokeListMock)
	})


})
