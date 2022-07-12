import { query } from '@angular/animations';
import { Component, OnInit, OnDestroy, QueryList } from '@angular/core';
import { Observable, interval, filter, take, map, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {
  x: number = 0;
  y: number = 0;
  suscriptor: Subscription | null = null
  ngOnDestroy(): void {
    this.suscriptor?.unsubscribe()
    this.x = 0
    this.y = 0
  }
  ngOnInit(): void {
    const obs = fromEvent<MouseEvent>(document.querySelector('#area')!, 'mousemove');
    this.suscriptor = obs.subscribe((e) => {
      this.x = e.clientX
      this.y = e.clientY

    })
  }

  // miSubcription: Subscription | null = null
  // constructor() {
  //   /*Ejemplo RxJS 
  //   let numero = 0
  //   const miObservable = new Observable<number>((observer) => {

  //       setInterval(() => {
  //         numero++
  //         observer.next(numero)
  //         numero === 3 && observer.complete()
  //         numero === 5 && observer.error("Se rompio ya nada ajajaja")
  //       }, 1000)

  //     });


  //       //forma anterior
  //       miObservable.subscribe(
  //         (result) => {
  //           console.log(result)
  //         },
  //         (error) => {
  //           console.error(error)
  //         },
  //         //  complete
  //         () => {
  //           console.info("Observable completed")
  //         }
  //       )


  //       // forma actual
  //       miObservable.subscribe({
  //         next: (result) => {
  //           console.log(result)
  //         },
  //         error: (error) => {
  //           console.error(error)
  //         },
  //         // complete
  //         complete: () => {
  //           console.warn("Observable completed")
  //         }

  //       })
  //     */
  // }


  // miIntervalo: Observable<number> = interval(500).pipe(
  //   map(value => value + 1),
  //   take(10),/*Veces a repetir */
  //   filter((value) => value % 2 === 0))

  // ngOnInit(): void {
  //   this.miSubcription = this.miIntervalo.subscribe(
  //     {
  //       next: value => console.log(value),
  //       complete: () => console.warn("Observable completed estos son los primeros numeros pares")
  //     }
  //   )
  // }
  // ngOnDestroy(): void {
  //   this.miSubcription!.unsubscribe()
  //   console.error("Observable destroyed");
  // }

}
