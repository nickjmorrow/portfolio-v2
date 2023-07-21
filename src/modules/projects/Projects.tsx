// external
import { Section } from 'src/modules/core/Section';
import { data } from 'src/modules/core/data';
import { Project as ProjectType } from 'src/modules/core/types';
import { Project } from 'src/modules/projects/Project';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Projects = () => {
    const renderProject = (project: ProjectType) => (
        <Project key={project.projectId} project={project} />
    );

    return (
        <Section
            id="projects"
            header="Projects"
            content={
                <ProjectListContainer>
                    {data.projects
                        .sort(byOrderId)
                        .filter((_, i) => i < 3)
                        .map(renderProject)}
                </ProjectListContainer>
            }
        />
    );
};

const byOrderId = (a: ProjectType, b: ProjectType) =>
    a.orderId < b.orderId ? -1 : 1;

const ProjectListContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: ${theme.spacing.ss8};
    margin-bottom: ${theme.spacing.ss16};
`;
