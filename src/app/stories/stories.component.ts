import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import storiesList from "../../assets/StoriesList.json";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoriesComponent implements OnInit {

  PrintToStoriesList() {
    let div = document.getElementById("StoriesList");
    for (let i = 0; i < storiesList.length; i++) {
      div!.innerHTML += `
    <div class="DisplayItemBody">
    <a class="DisplayItemTitle" href=` + storiesList[i]["Link"] + `>` + storiesList[i]["Title"] + `</a><br>
    <span>
      <p>
       ` + storiesList[i]["Description"] + `
      </p>
      <p>
      ` + storiesList[i]["Length"] + `
        </p>
    </span>
    </div>
    `;
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    this.PrintToStoriesList();
  }

}
