import { getExperienceYearsNumber } from '@shared/helpers';

import { IExperienceCard } from '../models';

export const experienceCardList: IExperienceCard[] = [
  {
    digit: getExperienceYearsNumber(2022),
    text: 'Years Experience',
  },
  {
    digit: 4,
    text: 'Commercial Projects',
  },
];
