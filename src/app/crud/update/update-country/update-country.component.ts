import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { GestionPaysService } from 'src/app/services/gestion-pays.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css'],
})
export class UpdateCountryComponent implements OnInit {
  updateCountryForm!: FormGroup;
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gestionPaysService: GestionPaysService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupération de l'id passée dans l'url
    this.activatedRoute.params.subscribe((param) => {
      console.log(param['id-country']);
      // on fait appel à la méthode getCountryById de notre service

      // pour récupérer l'objet Country d
      this.gestionPaysService
        .getCountryById(param['id-country'])
        .subscribe((country: Country) => {
          console.log(country);
          this.country = country;
          this.updateCountryForm = this.fb.group({
            name: [country.name, Validators.required],
            picture: [country.picture, Validators.required],

            id: [country.id],
          });
        });
    });
  }

  onSubmitForm() {
    const countryToUpdate = this.updateCountryForm.value;

    this.gestionPaysService.updateCountry(countryToUpdate).subscribe((resp) => {
      //alert(resp.message);
      // TODO Rediriger le user vers la page "/my-countries"
    });
  }
}
