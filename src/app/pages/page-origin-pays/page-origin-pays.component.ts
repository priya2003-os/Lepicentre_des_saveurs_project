import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Country } from 'src/app/models/country';
import { Product } from 'src/app/models/product';
import { GestionPaysService } from 'src/app/services/gestion-pays.service';

@Component({
  selector: 'app-page-origin-pays',
  templateUrl: './page-origin-pays.component.html',
  styleUrls: ['./page-origin-pays.component.css'],
})
export class PageOriginPaysComponent implements OnInit {
  country!: Country;
  countries!: Country[];
  category!: Category;
  listCategories!: Category[];

  constructor(
    private gestionPaysService: GestionPaysService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.gestionPaysService
        .getCountryById(param['id-country'])
        .subscribe((country: Country) => {
          this.country = country;
        });
    });
    this.gestionPaysService.getAllCountries().subscribe((response) => {
      console.log(response);
      this.countries = response;
    });
    this.gestionPaysService.getAllCategories().subscribe((response) => {
      console.log(response);
      this.listCategories = response;
    });
  }
  // onClickCategory(product: Product) {

  //   if (countryId) {
  //     this.gestionPaysService
  //       .goProducts(product)
  //       .subscribe((resp) => {
  //         console.log(resp);
  //       });

  //     const id = countryId + categoryId;
  //     console.log(id);
  //     return id;
  //   }
  // }
}

/*this.gestionPaysService.getAllProducts().subscribe((resp) => {
  console.log(resp);
  this.listProducts = resp;
});*/
