import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Country } from 'src/app/models/country';
import { Product } from 'src/app/models/product';
import { GestionPaysService } from 'src/app/services/gestion-pays.service';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css'],
})
export class PageProduitComponent implements OnInit {
  country!: Country[];
  category!: Category[];
  listProducts!: Product[];

  constructor(
    private gestionPaysService: GestionPaysService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((param) => this.gestionPaysService.getAllProducts(param['id'])
    // .subscribe)

    this.gestionPaysService.getAllProducts().subscribe((response) => {
      console.log(response);
      this.listProducts = response;
      console.log(this.listProducts);
    });

    this.gestionPaysService.getAllCountries().subscribe((resp) => {
      console.log(resp);
      this.country = resp;
    });

    this.gestionPaysService.getAllCategories().subscribe((response) => {
      console.log(response);
      this.category = response;
    });

    //   this.route.queryParams.subscribe((param) => {
    //     this.gestionPaysService.goProducts().subscribe((response) => {
    //       console.log(response);
    //     }
    //     console.log(param);
    //   })
  }
}
