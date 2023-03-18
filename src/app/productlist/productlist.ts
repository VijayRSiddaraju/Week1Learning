import { Component } from "@angular/core";

@Component({
    selector:'app-productlist',
    templateUrl:'./productlist.html'
})

export class productListComponent{
    title:string='Fire Stop Products';
    productList: any[]=[
        {
            'Name':'FP Colar',
            'Id': '123',
            'price': '230.45'     
          },
          {
             'Name':'FW_Protector',
             'Id':'345',
             'price':'458'    
          }
    ]
}