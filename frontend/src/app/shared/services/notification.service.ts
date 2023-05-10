import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastController: ToastController) {}

  async showSuccess(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      icon: 'checkmark-circle-outline',
    });

    await toast.present();
  }

  async showInfo(message: string, title?: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      icon: 'information-circle-outline',
    });

    await toast.present();
  }

  async showWarning(message: string, title?: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      icon: 'warning-outline',
    });

    await toast.present();
  }

  async showError(message: string, title?: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 5500,
      cssClass: 'alert-error',
      icon: 'alert-outline',
    });

    await toast.present();
  }

  clear() {
    this.toastController.dismiss();
  }
}
