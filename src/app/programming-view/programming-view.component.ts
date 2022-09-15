import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import applicationsList from 'src/assets/ApplicationsList.json';

@Component({
  selector: 'app-programming-view',
  templateUrl: './programming-view.component.html',
  styleUrls: ['./programming-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgrammingViewComponent implements OnInit {

  PrintToAppListDiv() {
    let div = document.getElementById("AppListDiv");
    for (let i = 0; i < applicationsList.length; i++) {
      div!.innerHTML += `
    <div class="DisplayItemBody">
    <a class="DisplayItemTitle" href=` + applicationsList[i]["Link"] + `>` + applicationsList[i]["Title"] + `</a><br>
    <span>
      ` + applicationsList[i]["BriefDescription"] + `
      <p>
        ` + applicationsList[i]["FullDescription"] + `
      </p>
    </span>
    </div>
    `;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.PrintToAppListDiv();
  }


}
