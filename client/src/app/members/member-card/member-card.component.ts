import { Component, input } from '@angular/core';
import { Member } from '../../_models/member';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapPersonFill,
  bootstrapEnvelopeFill,
  bootstrapHeartFill,
} from '@ng-icons/bootstrap-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-card',
  imports: [NgIcon, RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPersonFill,
      bootstrapEnvelopeFill,
      bootstrapHeartFill,
    }),
  ],
})
export class MemberCardComponent {
  member = input.required<Member>();
}
