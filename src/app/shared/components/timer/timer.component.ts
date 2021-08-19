import { Component, OnInit } from '@angular/core';
import {IRoundTimer} from "../../interfaces/round-timer.interface";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public roundTimerOptions!: IRoundTimer;

  constructor() { }

  public ngOnInit(): void {
    this.setDefaults();
  }

  private setDefaults(): void {
    this.roundTimerOptions = {
      stroke: 7,
      animation: 'linearEase',
      animationDelay: 0,
      background: '#dfdfdf',
      clockwise: true,
      color: '#df3f3e',
      current: 75,
      duration: 10,
      max: 100,
      radius: 140,
      rounded: true,
      responsive: false,
      semicircle: false,
      onRender: () => {}
    }
  }
}
