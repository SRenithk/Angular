import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck {

  constructor() {}

  @Input() var_child !: number;



  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
  }

  
  

}
