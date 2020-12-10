import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Country } from '../../country';
import { CountryService } from '../../services/country.service';


@Component({
    templateUrl:'./country-details.component.html'
})

export class CountryDetailsComponent implements OnInit {
    country: Country;
    constructor(private countryService: CountryService,
        private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.params
         .switchMap((params: Params) => this.countryService.getCountry(params['country-id']))
         .subscribe(country => this.country = country);
     }
}