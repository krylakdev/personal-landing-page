import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITechCard } from '@shared/models';
import { techCardList } from '@shared/constants';

@Component({
  selector: 'app-section-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './section-tech-stack.component.html',
  styleUrl: './section-tech-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTechStackComponent {
  experienceCardList: ITechCard[] = techCardList;
}
