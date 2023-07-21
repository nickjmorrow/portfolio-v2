// external
import { Typography } from 'src/modules/core/Typography';
import { Project as ProjectType } from 'src/modules/core/types';
import { ProjectIcons } from 'src/modules/projects/ProjectIcons';
import { ProjectTechnologyList } from 'src/modules/projects/ProjectTechnologyList';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Project = ({ project }: { project: ProjectType }) => {
    return (
        <Container>
            <ProjectImage />
            <ProjectInfo>
                <Name>{project.name}</Name>
                <ProjectDetails>
                    <Tagline>{project.tagline}</Tagline>
                    <ProjectTechnologyList project={project} />
                    <ProjectIcons project={project} />
                </ProjectDetails>
            </ProjectInfo>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    column-gap: ${theme.spacing.ss8};
`;

const ProjectImage = styled.div`
    min-width: 150px;
    height: 100px;
    background-color: black;
    opacity: 0.2;
    border-radius: ${theme.borderRadius.br1};
`;

const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.neutralColor.cs2};
`;

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss2};
    position: relative;
    top: -8px;
`;

const Name = styled(Typography)`
    display: block;
    font-weight: bold;
    font-size: ${theme.fontSizes.fs6};
    color: ${theme.neutralColor.cs1};
    z-index: 1;
`;

const Tagline = styled(Typography)`
    display: block;
    font-size: ${theme.fontSizes.fs3};
    color: ${theme.neutralColor.cs2};
    opacity: 0.8;
`;
