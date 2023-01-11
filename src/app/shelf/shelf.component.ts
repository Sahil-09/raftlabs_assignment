import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { utilService } from '../util.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
