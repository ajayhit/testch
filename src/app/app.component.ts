import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'third';
  abc="test work";
  product=[];
  producttoupdate:any;

   @ViewChild(ProductComponent) mchild: ProductComponent;

  ngOnInit()
  {
     this.product=this.getproduct();
  }
  updatestock(data)
  { 
 this.producttoupdate=this.product.find(this.findproduct,[data.id]);
 this.producttoupdate.stock=this.producttoupdate.stock+data.updtaedstockvalue;
  }
  findproduct(p)
  {
return p.id===this[0];
  }
  ngAfterViewInit()
  {

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
