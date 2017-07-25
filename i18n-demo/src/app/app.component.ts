import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { OnInit } from "@angular/core/src/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
   let lan =   this.translate.getBrowserLang();
   console.log("lan:",lan);

   this.translate.addLangs(["en", "zh_CN"]);
   this.translate.setDefaultLang('zh_CN');
  }
}
