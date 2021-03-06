import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  public slides: Array<Object> = [
    {
      video1: 'http://static.videogular.com/assets/videos/videogular.mp4',
      video2: 'https://mdbootstrap.com/img/video/forest.mp4',
      video3: 'https://mdbootstrap.com/img/video/Lines.mp4'
    },
    {
      video1: 'https://mdbootstrap.com/img/video/forest.mp4',
      video2: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      video3: 'https://mdbootstrap.com/img/video/animation-intro.mp4'
    },
    {
      video1: 'https://mdbootstrap.com/img/video/Lines.mp4',
      video2: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      video3: 'https://mdbootstrap.com/img/video/animation-intro.mp4'
    }
  ];
}
