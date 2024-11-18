import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ITechCard } from './models';
import { techCardList } from './constants';
import { TechCardFlipDirective } from './directives';
import { ExperienceYearsFormatPipe } from './pipes';

@Component({
  selector: 'app-section-tech-stack',
  standalone: true,
  imports: [NgOptimizedImage, TechCardFlipDirective, ExperienceYearsFormatPipe],
  templateUrl: './section-tech-stack.component.html',
  styleUrl: './section-tech-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTechStackComponent {
  techCardList: ITechCard[] = techCardList;
}
