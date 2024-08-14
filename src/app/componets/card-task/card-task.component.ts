import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss'],
})
export class CardTaskComponent implements OnInit {
  @Input() datas: any;

  
  constructor(private alertController: AlertController) { }

  onCheckboxChange(event: any) {
    const isChecked = event.detail.checked;
    console.log('Checkbox state changed. Is checked:', isChecked);
    // Aquí puedes realizar cualquier acción que desees según el estado del checkbox
    this.presentAlert();
  }

  ngOnInit() {
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Once the task is finished',
      subHeader: '',
      message: 'Happy your task is finished.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay clicked');
          },
        },
      ],
    });

    await alert.present();
  }

}
