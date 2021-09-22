import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
})

export class BodyComponent implements OnInit {
    constructor() { }

    showText = true;
    texto = "Un gran poder";
    autor = "Ben Parker";
    villanosList: string[] = ["Venon", "Octupus"];

    ngOnInit() { }
}