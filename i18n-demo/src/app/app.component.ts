import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OnInit } from '@angular/core/src/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  inputValue = 'SUB.TEST';

  result = '';

  resultMessage = '';

  constructor(private translate: TranslateService, private  http: Http) {

  }

  ngOnInit(): void {
   const lan =   this.translate.getBrowserLang();
   console.log('lan:', lan);

   this.translate.addLangs(['en_US', 'zh_CN']);
   this.translate.setDefaultLang('zh_CN');
  }

  changeLang(lang) {
    this.translate.use(lang);
  }

  requestApi(){
    this.http.get('assets/api/result.json')
      .map(data => data.json())
      .subscribe(data => {
         console.log('data:', data);
         this.result = data['message'];

         this.translate.get(this.result)
           .subscribe(msg => {
             this.resultMessage = msg;
           });
      })
  }
}
