import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryComponent} from './country.component';
// import {CountryDetailsComponent} from './country-detail.component';
import {CountryService} from './services/country.service';
import { CountryListComponent } from './country-list/country-list.component';
import {CountryRoutingModule} from './country-routing.module';
import { CountryDetailsComponent } from './country-list/details/country-details.component';


@NgModule({
    imports:[
        CommonModule,
        CountryRoutingModule
    ],
    declarations: [
        CountryComponent,
        CountryListComponent,
        CountryDetailsComponent
    ],
    providers: [CountryService]
})

export class CountryModule {

}