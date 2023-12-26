import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocng-model',
  templateUrl: './pocng-model.component.html',
  styleUrls: ['./pocng-model.component.css']
})
export class PocngModelComponent implements OnInit {
  title="ngModel";
  firstname="Akash";
  lastname="Niwane";
  state="Maharashtra";
  city="Amravati";
  constructor() { }

  ngOnInit(): void {
  }

  logForm(form: any) {
    // this.firstname = form.name.firstname;
    // this.lastname = form.name.lastname;
    // this.city = form.Address.city; // Correct the property name
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.city);
  }
}
