import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { LANG } from '../service/basic-authentication.service.';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService,
              private translate: TranslateService) { }

  public activeLang = 'es';

  ngOnInit() {
    if (sessionStorage.getItem(LANG)) {
      this.cambiarLenguaje(sessionStorage.getItem(LANG));
    } else {
      this.cambiarLenguaje(this.activeLang);
    }

  }

  public cambiarLenguaje(lang) {
    sessionStorage.setItem(LANG, lang);
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
