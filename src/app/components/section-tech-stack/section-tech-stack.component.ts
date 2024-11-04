import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './section-tech-stack.component.html',
  styleUrl: './section-tech-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTechStackComponent {}
