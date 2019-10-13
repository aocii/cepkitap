import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Anasayfa',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Hesabım',
      url: '/hesap',
      icon: 'person'
    },
    {
      title: 'Kitap',
      url: '/kitap',
      icon: 'paper'
    },
    {
      title: 'Deneme',
      url: '/soru',
      icon: 'folder'
    },
    {
      title: 'Giriş',
      url: '/giris',
      icon: 'log-in'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
