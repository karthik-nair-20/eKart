import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  product = {
    name: 'iphone',
    color:'black',
    price:999,
    discount :8.5,
    instock:0

  }
  name='john';

  discountPrice(){
   return this.product.price -  (this.product.price * this.product.discount/100)
  }
  namecge(event:any){
    return this.name = event.target.value;

  }

}
