// external
import React from 'react';
import styled from 'styled-components';
import { Project } from 'src/modules/core/types';
import { theme } from 'src/modules/theming';

export const ProjectTechnologyList: React.FC<{ project: Project }> = ({
    project,
}) => {
    return (
        <TechnologyListContainer>
            {project.technologies.map((t) => (
                <TechnologyListItem key={t.technologyId}>
                    {t.shortName ?? t.name}
                </TechnologyListItem>
            ))}
        </TechnologyListContainer>
    );
};

const TechnologyListContainer = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    row-gap: ${theme.spacing.ss2};
`;

const TechnologyListItem = styled.li`
    color: ${theme.coreColor.cs1};
    font-size: ${theme.fontSizes.fs2};
    display: inline;
    margin-right: ${theme.spacing.ss2};
    background-color: ${theme.coreColor.cs7};
    padding: 2px ${theme.spacing.ss2};
    font-weight: ${theme.fontWeights.fw5};
    border-radius: ${theme.borderRadius.br2};
`;
