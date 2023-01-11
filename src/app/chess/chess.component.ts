import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  constructor() { }
  board: any = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ]
  ngOnInit(): void {
  }
  isdirty = false;
  move(x: number, y: number) {
    if (this.board[x][y] === true || !this.isdirty) {
      this.clear()
      if (x - 2 <= 7 && x - 2 > -1 && y - 1 <= 7 && y - 1 > -1)
        this.board[x - 2][y - 1] = true
      if (x - 2 <= 7 && y + 1 <= 7 && x - 2 > -1 && y + 1 > -1)
        this.board[x - 2][y + 1] = true
      if (x + 2 <= 7 && y - 1 <= 7 && x + 2 > -1 && y - 1 > -1)
        this.board[x + 2][y - 1] = true
      if (x + 2 <= 7 && y + 1 <= 7 && x + 2 > -1 && y + 1 > -1)
        this.board[x + 2][y + 1] = true
      if (x - 1 <= 7 && y - 2 <= 7 && x - 1 > -1 && y - 2 > -1)
        this.board[x - 1][y - 2] = true
      if (x - 1 <= 7 && y + 2 <= 7 && x - 1 > -1 && y + 2 > -1)
        this.board[x - 1][y + 2] = true
      if (x + 1 <= 7 && y - 2 <= 7 && x + 2 > -1 && y - 2 > -1)
        this.board[x + 1][y - 2] = true
      if (x + 1 <= 7 && y + 2 <= 7 && x + 1 > -1 && y + 2 > -1)
        this.board[x + 1][y + 2] = true
      this.board[x][y] ="🐴"
      this.isdirty = true
    }else{
      alert("Please select valid position")
    }
  }


  clear() {
    this.isdirty = false
    this.board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ]
  }

}
