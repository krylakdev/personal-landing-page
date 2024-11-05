import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITechCard } from '@shared/models';
import { techCardList } from '@shared/constants';
import { NgOptimizedImage } from '@angular/common';
import { TechCardFlipDirective } from './directives';

@Component({
  selector: 'app-section-tech-stack',
  standalone: true,
  imports: [NgOptimizedImage, TechCardFlipDirective],
  templateUrl: './section-tech-stack.component.html',
  styleUrl: './section-tech-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTechStackComponent {
  techCardList: ITechCard[] = techCardList;
}
