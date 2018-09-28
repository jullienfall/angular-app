import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  public slides: Array<Object> = [
    {
      video1: 'https://mdbootstrap.com/img/video/Lines.mp4',
      video2: 'https://mdbootstrap.com/img/video/Tropical.mp4',
      video3: 'https://mdbootstrap.com/img/video/animation-intro.mp4'
    },
    {
      video1: 'https://mdbootstrap.com/img/video/forest.mp4',
      video2: 'https://mdbootstrap.com/img/video/Tropical.mp4',
      video3: 'https://mdbootstrap.com/img/video/animation-intro.mp4'
    },
    {
      video1: 'https://mdbootstrap.com/img/video/Lines.mp4',
      video2: 'https://mdbootstrap.com/img/video/forest.mp4',
      video3: 'https://mdbootstrap.com/img/video/animation-intro.mp4'
    }
  ];

  playPause(video) {
    if (video.paused) {
      video.play();
    } else video.pause();
  }
}
