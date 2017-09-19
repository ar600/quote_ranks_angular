import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = {
    text:"",
    author:""
  }
  quotes = [];
  onSubmit= function(){
    this.quotes.push(this.quote);
    console.log("before",this.quote);
    this.quote={
      text:'',
      author:''
      }
      console.log("after",this.quote);
      console.log(this.quotes);
  }
  constructor() { }

  ngOnInit() {
  }

}
