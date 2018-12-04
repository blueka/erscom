import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-list-dynamic',
  templateUrl: './grid-list-dynamic.component.html',
  styleUrls: ['./grid-list-dynamic.component.css']
})
export class GridListDynamicComponent implements OnInit {
  tiles: Tile[] = [
    {text: '1', cols: 3, rows: 1, color: 'orange'},
    {text: '2', cols: 1, rows: 2, color: 'lightgreen'},
    {text: '3', cols: 1, rows: 1, color: 'lightpink'},
    {text: '4', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
