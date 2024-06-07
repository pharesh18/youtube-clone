import { Component, Input } from '@angular/core';
import { IVides } from '../../../types/tempData';

@Component({
  selector: 'app-card-video',
  standalone: true,
  imports: [],
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.css',
})
export class CardVideoComponent {
  @Input() data: IVides = {
    id: 0,
    imgUrl: '',
    title: '',
    timestamp: '',
    time: '',
    uploader: '',
    views: '',
  };
}
