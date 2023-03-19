import { Component } from "@angular/core";

@Component({
    selector:'app-productlist',
    templateUrl:'./productlist.html',
    styleUrls:['./productlist.css']
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
             'price':'458.78'    
          },
          {
            'Name':'RW_Prot',
            'Id':'456',
            'price':'12.34'    
         }
    ]
}