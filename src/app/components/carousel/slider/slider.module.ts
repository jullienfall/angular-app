import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// videogular
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

// component
import { SliderComponent } from './slider.component';

@NgModule({
  imports: [CommonModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule],
  declarations: [SliderComponent]
})
export class SliderModule {}
