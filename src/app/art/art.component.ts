import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import artList from "../../assets/ArtList.json";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtComponent implements OnInit {


  PrintToArtListDiv() {
    let div = document.getElementById("ArtListDiv");
    for (let i = 0; i < artList.length; i++) {
      div!.innerHTML +=
        `<a class="ArtTN" href="` + artList[i]["Link"] + `" style="background-image: url(` + artList[i]["Thumbnail"] + `)"></a>`;
    }
  }

  //

  constructor() {

  }

  ngOnInit(): void {
    this.PrintToArtListDiv();
  }

}
