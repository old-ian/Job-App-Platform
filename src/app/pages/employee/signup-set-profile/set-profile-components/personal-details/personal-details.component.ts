import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { base64ToBlob, blobToBase64 } from 'base64-blob';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  @Input() regForm: FormGroup;
  imageChangedEvent: any = ''
  croppedImage: any = ''
  modalRef: BsModalRef
  canvasRotation = 0
  transform: ImageTransform = {}
  profileImage = ''

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    console.log(this.checkForm());
  }

  submitted() {
    console.log(this.checkForm());
  }

  checkForm() {
    return this.regForm.get('personalDetails').valid;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }


  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  uploadPhoto() {
    base64ToBlob(this.croppedImage)
      .then(blob => {
        blobToBase64(blob).then(res => {
          this.profileImage = res; this.modalRef.hide()
        });
      })
      .catch();
  }
}
