import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionContainerComponent } from '@shared/components';
import { FooterComponent, HeroComponent } from '@components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SectionContainerComponent, HeroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'personal-landing-page';
}
