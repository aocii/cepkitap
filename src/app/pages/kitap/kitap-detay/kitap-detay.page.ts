import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitapService } from '../kitap.service';
import { kitap } from '../kitap.model';

@Component({
  selector: 'app-kitap-detay',
  templateUrl: './kitap-detay.page.html',
  styleUrls: ['./kitap-detay.page.scss'],
})
export class KitapDetayPage implements OnInit {
  loadedKitap: kitap;

  constructor(
    private activatedRoute: ActivatedRoute,
    private kitapservis: KitapService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('kitapId')) {
        // devam
        return;
      }
      const kitapId = paramMap.get('kitapId');
      this.loadedKitap = this.kitapservis.getKitap(kitapId);
    });
  }

}
