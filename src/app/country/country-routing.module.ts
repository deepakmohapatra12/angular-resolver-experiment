import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CountryDetailResolver } from './country-detail.resolver';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-list/details/country-details.component';
import { CountryComponent } from './country.component';


const coutryRoutes: Routes = [
    {
        path:'',
        component: CountryComponent,
        children: [
            {
                path: 'countryList',
                component: CountryListComponent,
                children: [
                    {
                        path: 'detail/:country-id',
                        component: CountryDetailsComponent,
                        resolve: {
                            countryDetail: CountryDetailResolver
                        }
                    }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(coutryRoutes)],
    exports: [RouterModule],
    providers: [CountryDetailResolver]
})

export class CountryRoutingModule{}