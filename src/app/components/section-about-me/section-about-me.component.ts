import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { experienceCardList } from './constants';
import { IExperienceCard } from './models';

@Component({
  selector: 'app-section-about-me',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './section-about-me.component.html',
  styleUrl: './section-about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionAboutMeComponent {
  experienceCardList: IExperienceCard[] = experienceCardList;
}
