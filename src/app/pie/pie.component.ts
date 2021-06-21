import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public autor: string = "Ana Uribe";
  public year: string = '2021';

  constructor() { }

  ngOnInit(): void {
  }

}
