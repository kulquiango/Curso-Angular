import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode.service';
import { TemperatureEnum } from '../../../shared/enums/temperature.enum';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css']
})
export class CustomContainerComponent implements OnInit {


  grados = 12
  tipo :TemperatureEnum = TemperatureEnum.F
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
