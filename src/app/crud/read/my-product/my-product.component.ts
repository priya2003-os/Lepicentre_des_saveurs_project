import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { GestionPaysService } from 'src/app/services/gestion-pays.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css'],
})
export class MyProductComponent implements OnInit {
  public listProducts!: Product[];
  product!: Product;

  constructor(private gestionPaysService: GestionPaysService) {}

  ngOnInit(): void {
    this.gestionPaysService.getAllProducts().subscribe((response) => {
      console.log(response);
      this.listProducts = response;
    });
  }
  onClickDeleteProduct(product: Product) {
    this.gestionPaysService.deleteProduct(product).subscribe({
      next: (resp) => {
        console.log(resp);
        this.listProducts = this.listProducts.filter(
          (item) => item !== product
        );
      },
      error: (err) =>{
        console.log(err);
      },
    });
  }
}
