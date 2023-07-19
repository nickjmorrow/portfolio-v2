// external
import { CardHeader } from 'src/modules/core/CardHeader';
import { Container } from 'src/modules/core/Container';
import { data } from 'src/modules/core/data';
import { Project } from 'src/modules/core/types';
import { FeaturedProject } from 'src/modules/projects/FeaturedProject';
import { OtherProject } from 'src/modules/projects/OtherProject';
import { theme } from 'src/modules/theming';
import React from 'react';
import styled from 'styled-components';

export const Projects: React.FC = () => {
    return (
        <CustomContainer id="projects">
            <Top />
            <CardHeader
                style={{
                    zIndex: 1,
                    paddingBottom: '3px',
                    marginBottom: theme.spacing.ss16,
                    width: '80%',
                }}
            >
                Projects
            </CardHeader>
            <FeaturedProjectListContainer>
                {data.projects
                    .sort(byOrderId)
                    .filter((_, i) => i < 3)
                    .map((p, i) => (
                        <FeaturedProject
                            project={p}
                            key={p.projectId}
                            index={i}
                        />
                    ))}
            </FeaturedProjectListContainer>
            <OtherProjectListContainer>
                {data.projects
                    .sort(byOrderId)
                    .filter((p, i) => i >= 3)
                    .map((p) => (
                        <OtherProject project={p} key={p.projectId} />
                    ))}
            </OtherProjectListContainer>
        </CustomContainer>
    );
};

const byOrderId = (a: Project, b: Project) => (a.orderId < b.orderId ? -1 : 1);

const CustomContainer = styled(Container)`
    box-shadow: none;
    padding-bottom: ${theme.spacing.ss32};
`;

const FeaturedProjectListContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing.ss16};
    margin-bottom: ${theme.spacing.ss16};
`;

const OtherProjectListContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 700px;
    gap: ${theme.spacing.ss8};
`;

const Top = styled.div`
    height: 200px;
    background-color: white;
    width: 100%;
    position: absolute;
    z-index: 1;
    top: -100px;
    transform: skewY(5deg) scale(1.05, 1);
    border-radius: 200px;
`;
