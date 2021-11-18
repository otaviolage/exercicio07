import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-media-simples',
  templateUrl: './calcula-media-simples.component.html',
  styleUrls: ['./calcula-media-simples.component.css']
})
export class CalculaMediaSimplesComponent implements OnInit {
  ac1: any;
  ac2: any;
  ag: any;
  af: any;
  media: any;
  constructor() { }

  ngOnInit(): void {
  }

  calcularMedia(){
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.3) + (this.ag * 0.1) + (this.af * 0.45);
  }

}
