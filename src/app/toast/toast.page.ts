import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastController: ToastController) {}

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bélgica tem o recorde do mundo de país com mais tempo sem governo: levou 541 dias entre o governo de Leterme II (2010) e a formação do novo governo de Di Rupo (2011).',
      duration: 10000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'A Bélgica possui três idiomas oficiais: francês, neerlandês (holandês) e alemão, mas somente 1% da população tem o alemão como língua materna.',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
