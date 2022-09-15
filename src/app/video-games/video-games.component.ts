import {Component, OnInit} from '@angular/core';
import gamesList from 'src/assets/VideoGamesList.json';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit {

  PrintToVGListDiv() {
    let div = document.getElementById("VGList");
    for (let i = 0; i < gamesList.length; i++) {
      div!.innerHTML += `
    <div class="DisplayItemBody">
      <a class="DisplayItemTitle" href=` + gamesList[i]["Link"] + `>` + gamesList[i]["Title"] + `</a><br>
      <span>
        ` + gamesList[i]["BriefDescription"] + `<br>
        Credits: ` + gamesList[i]["Credits"] + `
        <p>
          ` + gamesList[i]["FullDescription"] + `
        </p>
      </span>
    </div>
    `;
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    this.PrintToVGListDiv();
  }

}
