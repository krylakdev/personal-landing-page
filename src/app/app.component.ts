import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionContainerComponent } from '@shared/components';
import { HeroComponent } from '@components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SectionContainerComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'personal-landing-page';
}
