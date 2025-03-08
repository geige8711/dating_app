import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Member } from '../_models/member';
import { GalleryModule, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, GalleryModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  activeIndex = 0;
  @Input({ required: true }) member!: Member;
  @Input({ required: true }) photos!: GalleryItem[];
  onTabClick(index: number) {
    this.activeIndex = index;
  }
}
