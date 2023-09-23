import { Experience } from 'src/modules/core/types';

export const getSortedExperiences = (experiences: Experience[]) =>
    experiences.sort((a, b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
