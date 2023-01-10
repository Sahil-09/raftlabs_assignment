import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { utilService } from '../util.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private util: utilService) { }

  data: any[] = []
  headercount = 4
  text: string = ''
  isAuthor = false
  ngOnInit(): void {
    this.fetchData()
  }

  search() {
    if (this.text.length == 0) {
      this.fetchData()
    } else {
      this.data = this.data.filter(e => {
        return e.isbn == this.text
      })
    }
  }

  fetchData() {
    this.route.queryParams.subscribe((val: any) => {
      this.data = []
      let data2
      this.isAuthor = false
      let data = val.q
      if (data == 'authors') {
        data = ['authors']
      }
      if (data.length > 0)
        data.forEach((dat: any) => {
          if (dat == 'authors') {
            this.isAuthor = true
          }
          this.http.get(`https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/${dat}.csv`, { responseType: 'text' }).subscribe(resp => {
            if (dat == 'authors')
              this.headercount = 3
            else
              this.headercount = 4
            data2 = this.util.parseCSVData(resp, this.headercount,dat)
            if (!!val.author) {
              data2 = data2.filter(e => {
                return e.authors.split(',').findIndex((a: any) => a == val.author) !== -1
              })
            }
            this.data.push(...data2)
            if (!this.isAuthor)
              this.data.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : 0)
          })
        });
    })
  }

}
