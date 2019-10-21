import { Component, OnInit } from '@angular/core';
import { kitap } from './kitap.model';
import { asapScheduler } from 'rxjs';
import { KitapService } from './kitap.service';

@Component({
  selector: 'app-kitap',
  templateUrl: './kitap.page.html',
  styleUrls: ['./kitap.page.scss'],
})
export class KitapPage implements OnInit {
  Kitaplar: kitap[];

  constructor(private kitapService: KitapService) { }

  ngOnInit() {
    this.Kitaplar = this.kitapService.getAllKitaplar();
  }

}
