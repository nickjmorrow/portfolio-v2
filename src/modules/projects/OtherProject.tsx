// external
import React from 'react';
import styled from 'styled-components';
import { Project } from 'src/modules/core/types';
import { Card } from 'src/modules/core/Card';
import { ProjectIcons } from 'src/modules/projects/ProjectIcons';
import { ProjectTechnologyList } from 'src/modules/projects/ProjectTechnologyList';
import { Tagline } from 'src/modules/projects/Tagline';
import { Name } from 'src/modules/projects/Name';

export const OtherProject: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Container>
            <Name>{project.name}</Name>
            <Tagline>{project.tagline}</Tagline>
            <ProjectTechnologyList project={project} />
            <ProjectIcons project={project} />
        </Container>
    );
};

const Container = styled(Card)`
    width: 60%;
    max-width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;
