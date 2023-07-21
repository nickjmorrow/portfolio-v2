// external
import React from 'react';
import { Container } from 'src/modules/core/Container';
import { Section } from 'src/modules/core/Section';
import { data } from 'src/modules/core/data';
import { ExperienceList } from 'src/modules/experiences/ExperienceList';
import styled from 'styled-components';

export const Experiences: React.FC = () => {
    const { experiences } = data;

    return (
        <CustomContainer id="experiences">
            <Section
                header="Experiences"
                id="experiences"
                content={<ExperienceList experiences={experiences} />}
            />
        </CustomContainer>
    );
};

const CustomContainer = styled(Container)``;
