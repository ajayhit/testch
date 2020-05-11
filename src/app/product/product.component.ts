import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product=[];
  constructor() { }

  ngOnInit(): void {
    this.product=this.getproduct();
  }

  
  getproduct(){
    return [
      {'id':1,'title':'abc','price':200,'stock':11},
      {'id':2,'title':'sdfsdf','price':400,'stock':15},
      {'id':3,'title':'bvfs','price':800,'stock':23},
      {'id':4,'title':'egfd','price':100,'stock':63},
      {'id':5,'title':'gdss','price':1200,'stock':21},
      {'id':6,'title':'egsdebg','price':1420,'stock':81},
      {'id':7,'title':'jkhjkyu','price':300,'stock':19},
      {'id':8,'title':'lhjkyu','price':650,'stock':16}
    ];
  }

}
