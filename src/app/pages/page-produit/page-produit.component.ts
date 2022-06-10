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
  productCountry!: any;
  productCategory!: any;
  // country!: Country[];
  // category!: Category[];
  listProducts!: Product | any;

  constructor(
    private gestionPaysService: GestionPaysService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap;
    const countryIdFromRoute = String(id.get('country.id'));
    this.productCountry = this.route.snapshot.paramMap.get('countryId');

    console.log(this.productCountry);

    const categoryIdFromRoute = String(id.get('categoryd'));
    this.productCategory = this.route.snapshot.paramMap.get('categoryId');
    console.log(this.productCategory);
    const countryId = this.productCountry;
    const categoryId = this.productCategory;

    this.gestionPaysService
      .getProductByIdCountryAndIdCategory(countryId, categoryId)
      .subscribe((response) => {
        console.log(response);
        this.listProducts = response;
        console.log(this.listProducts);
      });

    // subscribe((param) => {
    //   console.log(param['id-product']);
    //   this.gestionPaysService
    //     .getProductByIdCountryAndIdCategory(param['id-product'])
    //     .subscribe((product: Product[]) => {
    //       console.log(product);
    //       this.listProducts = product;
    //     });
    // });
  }

  // this.gestionPaysService.getAllProducts(countryId).subscribe((response) => {
  //   console.log(response);
  //   this.listProducts = response;
  //   console.log(this.listProducts);
  // });

  // this.gestionPaysService.getAllCountries().subscribe((resp) => {
  //   console.log(resp);
  //   this.country = resp;
  // });

  // this.gestionPaysService.getAllCategories().subscribe((response) => {
  //   console.log(response);
  //   this.category = response;
  // });

  //   this.route.queryParams.subscribe((param) => {
  //     this.gestionPaysService.goProducts().subscribe((response) => {
  //       console.log(response);
  //     }
  //     console.log(param);
  //   })
}
