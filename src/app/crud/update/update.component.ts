import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { GestionPaysService } from 'src/app/services/gestion-pays.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  newCountryForm!: FormGroup;

  router: any;

  constructor(
    private fb: FormBuilder,
    private gestionPaysService: GestionPaysService
  ) {}

  ngOnInit(): void {
    this.newCountryForm = this.fb.group({
      name: ['', Validators.required],
      picture: [, Validators.required],
    });

    // this.activatedRoute.params.subscribe((param) => {
    //   console.log(param['id-country']);

    //   this.gestionPaysService.getCountryByID(param['id-country']).subscribe((country: Country) => {
    //     console.log(country);
    //     this.updateCountryForm = this.fb.group({
    //       name: [country.name, Validators.required],
    //       picture: [country.picture, Validators.required],
    //       _id: [country._id]
    //     })
    //   })
    // })
  }

  onSubmitForm() {
    console.log(this.newCountryForm.value);
    const newCountry = new Country(
      this.newCountryForm.value.name,
      this.newCountryForm.value.picture
    );
    console.log(newCountry);

    this.gestionPaysService.createNewCountry(newCountry).subscribe(() => {
      console.log('Le pays a été créé !!!');
      //this.router.navigateByUrl('/create-country');
    });
  }
}
