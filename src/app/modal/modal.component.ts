import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbCarouselConfig]
})
export class ModalComponent {
  showNavigationArrows: boolean = false;

  public slides: Array<Object> = [
    {
      video1: 'http://static.videogular.com/assets/videos/videogular.mp4',
      title1: 'Earth',
      video2: 'https://mdbootstrap.com/img/video/forest.mp4',
      title2: 'Forest',
      video3: 'https://mdbootstrap.com/img/video/Lines.mp4',
      title3: 'Lines'
    },
    {
      video1: 'https://mdbootstrap.com/img/video/forest.mp4',
      title1: 'Forest',
      video2: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      title2: 'Bunny',
      video3: 'https://mdbootstrap.com/img/video/animation-intro.mp4',
      title3: 'Intro'
    },
    {
      video1: 'https://mdbootstrap.com/img/video/Lines.mp4',
      title1: 'Lines',
      video2: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      title2: 'Elephants dream',
      video3: 'https://mdbootstrap.com/img/video/animation-intro.mp4',
      title3: 'Intro'
    }
  ];

  constructor(config: NgbCarouselConfig, private modalService: NgbModal) {
    config.showNavigationArrows = false;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
