import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContainerComponent {
  sectionName = input.required<string>();
}
