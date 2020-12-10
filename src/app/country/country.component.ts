import { Component, OnInit } from '@angular/core';

@Component({
    template: `<h2>Welcome to country Home</h2>
    <div ngClass="child-container">
    <router-outlet></router-outlet>
    </div>`
})

export class CountryComponent implements OnInit{
    constructor() {

    }
    ngOnInit() {

    }
}