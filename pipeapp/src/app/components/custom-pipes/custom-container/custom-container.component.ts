import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css']
})
export class CustomContainerComponent implements OnInit {


  constructor(private DarkModeService:DarkModeService) { }

  ngOnInit(): void {
  }

  get dark(){
    return this.DarkModeService.dark
  }
  changeMode(){
    this.DarkModeService.changeMode();
  }

}
