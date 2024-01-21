// external
import { Text } from 'src/modules/core/Text';
import { Project as ProjectType } from 'src/modules/core/types';
import { ProjectIcons } from 'src/modules/projects/ProjectIcons';
import { ProjectTechnologyList } from 'src/modules/projects/ProjectTechnologyList';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Project = ({ project }: { project: ProjectType }) => {
    return (
        <Container>
            <Name>{project.name}</Name>
            <ProjectDetails>
                <Tagline>{project.tagline}</Tagline>
                <ProjectTechnologyList project={project} />
                <ProjectIcons project={project} />
            </ProjectDetails>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`;

const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.neutralColor.cs2};
`;

const Name = styled(Text)`
    font-weight: bold;
    font-size: ${theme.fontSizes.fs6};
    color: ${theme.neutralColor.cs1};
    z-index: 1;
`;

const Tagline = styled(Text)`
    display: block;
    font-size: ${theme.fontSizes.fs3};
    color: ${theme.neutralColor.cs2};
    opacity: 0.8;
`;
