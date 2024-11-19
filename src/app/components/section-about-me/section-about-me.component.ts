import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { contactLinkList, experienceCardList } from './constants';
import { IContactLink, IExperienceCard } from './models';

@Component({
  selector: 'app-section-about-me',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './section-about-me.component.html',
  styleUrl: './section-about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionAboutMeComponent {
  contactLinkList: IContactLink[] = contactLinkList;
  experienceCardList: IExperienceCard[] = experienceCardList;
}
