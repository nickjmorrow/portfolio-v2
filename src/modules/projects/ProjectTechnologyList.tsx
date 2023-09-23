// external
import React from 'react';
import styled from 'styled-components';
import { Project } from 'src/modules/core/types';
import { theme } from 'src/modules/theming';
import { Tag } from 'src/modules/core/Tag';

export const ProjectTechnologyList: React.FC<{ project: Project }> = ({
    project,
}) => {
    return (
        <TechnologyListContainer>
            {project.technologies.map((t) => (
                <Tag label={t.shortName ?? t.name} key={t.technologyId} />
            ))}
        </TechnologyListContainer>
    );
};

const TechnologyListContainer = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: ${theme.spacing.ss4};
`;
