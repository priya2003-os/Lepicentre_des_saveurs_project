import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country';
import { GestionPaysService } from 'src/app/services/gestion-pays.service';

@Component({
  selector: 'app-my-country',
  templateUrl: './my-country.component.html',
  styleUrls: ['./my-country.component.css'],
})
export class MyCountryComponent implements OnInit {
  public listCountries!: Country[];
  country!: Country;

  constructor(
    private gestionPaysService: GestionPaysService  ) {}

  ngOnInit(): void {
    this.gestionPaysService.getAllCountries().subscribe((response) => {
      console.log(response);
      this.listCountries = response;
    });
  }

  onClickDeleteCountry(country: Country) {
  
      this.gestionPaysService.deleteCountry(country).subscribe({
        next: (resp) => {
          console.log(resp);
          // Rechercher dans le tableau this.listCountries l'objet country avec l'_id == countryId
          // et le supprimer pour que notre liste de pays n'affiche plus le pays supprimé

          //version compacte
          this.listCountries = this.listCountries.filter(
            (item) => item !== country
          );

          // Version détaillée
          // const newArrayFiltered = this.listCountries.filter(country => country._id !==  countryId);
          // this.listCountries = newArrayFiltered;

          // Version plus détaillée
          // const detailsNewArrayFiltered = this.listCountries.filter((country) => {
          //   if(country._id !==  countryId) {
          //     return country;
          //   } else return;
          // });
          // this.listCountries = detailsNewArrayFiltered;
        },
        error: (err) => {
          console.log(err);
        },
      });
    // }
  }
}
