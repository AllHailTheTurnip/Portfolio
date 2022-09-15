import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import contactsList from "../../assets/ContactsList.json";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {

  PrintToContactsList() {
    let div = document.getElementById("Contacts");
    for (let i = 0; i < contactsList.length; i++) {
      div!.innerHTML +=
        `<li class="DisplayItemTitle">
            <a href="` + contactsList[i]["Link"] + `">
            ` + contactsList[i]["Website"] + `
            </a>
        </li>`;
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    this.PrintToContactsList();
  }

}
