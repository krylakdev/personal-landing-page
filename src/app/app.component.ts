import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionContainerComponent } from '@shared/components';
import { FooterComponent, HeroComponent, SectionAboutMeComponent } from '@components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SectionContainerComponent, HeroComponent, FooterComponent, SectionAboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
