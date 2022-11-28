import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export default class NotificationService {
  constructor(private toastrService: ToastrService) {}
  notify(message: string, options: Partial<NotificationOptions>): void {
    this.toastrService.show(
      message,
      options.notificationTitle,
      {
        positionClass: options.notificationPosition ?? NotificationPosition.BottomRight,
        timeOut: options.timeOut ?? 5000,
        closeButton: options.closeButton ?? false,
      },
      options.notificationType
    );
}
}

export class NotificationOptions {
  notificationTitle: NotificationTitle;
  notificationType: NotificationType;
  notificationPosition: NotificationPosition;
  timeOut: number;
  closeButton: boolean;
}

export enum NotificationTitle {
  Error = 'Error',
  Success = 'Success',
  Info = 'Information',
  Warning = 'Warning',
  Message = 'Message',
}

export enum NotificationType {
  Error = 'toast-error',
  Success = 'toast-success',
  Info = 'toast-info',
  Warning = 'toast-warning',
  Message = 'toast-message',
}

export enum NotificationPosition {
  TopRight = 'toast-top-right',
  TopCenter = 'toast-top-center',
  BottomRight = 'toast-bottom-right',
  BottomCenter = 'toast-bottom-center',
}
