import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  pokeList: Array<any> = [];
  page: number = 0;
  constructor(private pokeService: PokeService) {
    this.setData();
  }

  setData() {
    this.pokeService.getList(this.page).subscribe((res: any) => {
      this.pokeList = res.results;
    });
  }
  nextPage() {
    this.page += 8;
    this.setData();
  }
  previousPage() {
    if (this.page >= 8) {
      this.page -= 8;
      this.setData();
    } else {
      // alert('No Existen mas pokemon');
      window.location.href = 'https://www.youtube.com/watch?v=Yhs7BmCJ54A';
    }
  }
}
