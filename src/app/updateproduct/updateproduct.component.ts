import { Component, OnInit,Input, OnChanges, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit, OnChanges {

   @Input() stock: number;
   @Input() productid: number;
   color= '';
   updtaedstockvalue: number;
   @Output() stockvaluevent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  stockvaluechnage(){
    this.stockvaluevent.emit({ 
      id:this.productid, updtaedstockvalue:this.updtaedstockvalue 
    });
  }
  ngOnChanges(){
 if(this.stock>10){
   this.color='green';
 }
 else{
   this.color='red';
 }

  }

}
