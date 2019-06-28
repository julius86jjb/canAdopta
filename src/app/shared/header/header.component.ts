import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
      `
      .sign-in2, .sign-in2:hover {
            color: #fff;
            text-decoration: none;
            line-height: 36px;
            margin-left: 20px;
            font-size: 11px;
            border-radius: 2px;
            font-weight: 600;
        }
        `
    ]
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
