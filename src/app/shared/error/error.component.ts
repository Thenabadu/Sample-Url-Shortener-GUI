import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage:String = "Error 404, You've clicked on a bad link or entered an invalid URL.";

  constructor() { }

  ngOnInit(): void {
  }

}
