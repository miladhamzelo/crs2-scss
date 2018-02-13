import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time.pipe';
import { ExcerptPipe } from './excerpt.pipe';
import {SafePipe} from './safe-pipe';
@NgModule({
  declarations: [
    RelativeTimePipe,
    ExcerptPipe,
    SafePipe
  ],
  exports: [
    RelativeTimePipe,
    ExcerptPipe,
    SafePipe
  ]
})
export class CommonPipesModule { }
