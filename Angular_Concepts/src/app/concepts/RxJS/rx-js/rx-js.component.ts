import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RxJSComponent implements OnInit{

  agent$ !: Observable<string>;
  agent !: string;
  streamAgent$ !: Observable<string>;
  streamAgent !: string;

  ngOnInit() : void {
    this.assignData();
    this.streamData();
    this.agent$.subscribe(res => {
      this.agent = res;
      console.log(this.agent);
    })
    
    this.streamAgent$.subscribe(res => {
      this.streamAgent = res;
      console.log(this.streamAgent);
    })
  }

  assignData(){
    this.agent$ =  new Observable(function(observer) {
      try {
        observer.next('User');
        observer.next('Renith');
        observer.next('Kumar');

      }
      catch(e){
        observer.error(e);
      }
    })
  }
  streamData(){
    this.streamAgent$ =  new Observable(function(observer) {
      try {
        observer.next('User');
        setInterval(()=>{
          observer.next('Renith')
        },3000);
        setInterval(()=>{
          observer.next('Kumar')
        },6000);
      }
      catch(e){
        observer.error(e);
      }
    })
  }

  // of Operator
  studentList$ !: Observable<string[]>;

  OfOperatorExample(){
    //The of operator converts int, string, array, object, etc. to an observable.
    //need to subscribe to the observable to read the data.
    this.studentList$ = of(['Renith','Kumar','User1','User2'])
  }

  // from Operator
  orderList$ !: Observable<string>;

  fromOperatorExample(){
    //The from operator converts array, array-like object, 
    //a promise, an iterable object, or an observable-like object 
    //to an observable.
    //Need to subscribe to the observable to read the data.
    this.orderList$ = from(['Grocery','Fruits','Milk','Eggs'])
  }
  
}
