import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experienceYearsFormat',
  standalone: true,
})
export class ExperienceYearsFormatPipe implements PipeTransform {
  transform(experienceYears: number): string {
    return experienceYears ? `${experienceYears}+ years` : '1< year';
  }
}
