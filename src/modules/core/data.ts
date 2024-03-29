import { Project, Experience, Technology } from 'src/modules/core/types';

interface Data {
    projects: Project[];
    experiences: Experience[];
    technologies: Technology[];
}

const react: Technology = {
    technologyId: 1,
    name: 'React.js',
    orderId: 1,
    version: '16.8',
};

const nodejs: Technology = {
    technologyId: 2,
    name: 'Node.js',
    orderId: 2,
    version: null,
};

const postgres: Technology = {
    technologyId: 3,
    name: 'Postgres',
    orderId: 3,
    version: null,
};

const htmlCss: Technology = {
    technologyId: 4,
    name: 'HTML & CSS',
    orderId: 4,
    version: null,
};

const typescript: Technology = {
    technologyId: 5,
    name: 'TypeScript',
    orderId: -1,
    version: null,
};

const csharp: Technology = {
    technologyId: 6,
    name: 'C# / .NET',
    shortName: '.NET',
    highlightedNames: ['C#', '.NET'],
    orderId: 6,
    version: null,
};

const sqlServer: Technology = {
    technologyId: 7,
    name: 'SQL Server',
    orderId: 7,
    version: null,
};

const designSystems: Technology = {
    technologyId: 8,
    name: 'Design Systems',
    orderId: 8,
    version: null,
};

const dataVisualization: Technology = {
    technologyId: 9,
    name: 'Data Visualization',
    orderId: 9,
    version: null,
};

const nestJs: Technology = {
    technologyId: 10,
    name: 'Nest.js',
    orderId: 10,
    version: null,
};

const chakra: Technology = {
    technologyId: 11,
    name: 'Chakra UI',
    orderId: 11,
    version: null,
};

const vite: Technology = {
    technologyId: 12,
    name: 'Vite',
    orderId: 12,
    version: null,
};

const zenlytic: Experience = {
    experienceId: 5,
    name: 'Zenlytic',
    roleName: 'Senior Software Engineer',
    startDate: new Date(2022, 10, 10),
    companyUrl: 'https://www.zenlytic.com',
    endDate: null,
    technologies: [
        react,
        typescript,
        designSystems,
        dataVisualization,
        chakra,
        vite,
    ],
    experienceDetails: [
        {
            description:
                'Worked in a frontend team of 2 on an LLM-powered business intelligence web application built with React and TypeScript.',
        },
        {
            description:
                'Developed features for data visualization, dashboard management, and chatbot interface.',
        },
    ],
};

const tempus: Experience = {
    experienceId: 4,
    name: 'Tempus',
    roleName: 'Senior Software Engineer',
    startDate: new Date(2020, 8, 28),
    endDate: new Date(2022, 5, 0),
    companyUrl: 'https://tempus.com',
    technologies: [react, typescript, nodejs, nestJs],
    experienceDetails: [
        {
            experienceDetailId: 1,
            description:
                "Worked in a team of 3 on Tempus' UI component library (React, TypeScript) of over 50 design system-adherent components, consumed by 43 other engineering teams throughout the company. ",
        },
        {
            experienceDetailId: 2,
            description:
                'Worked in team of 8 on web application (React, TypeScript, NodeJS) to model lab management processes for the conversion of human tissue into sequenced DNA.',
        },
        {
            experienceDetailId: 3,
            description:
                'Contributed to architectural design and implementation that would allow lab processes to be modeled in multiple labs at different locations, enabling Tempus to increase its lab throughput by 30%.',
        },
    ],
};

const fora: Experience = {
    experienceId: 2,
    name: 'Fora',
    roleName: 'Software Engineer',
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 9, 0),
    companyUrl: 'https://forafinancial.com',
    technologies: [csharp, react, typescript],
    experienceDetails: [
        {
            experienceDetailId: 1,
            description:
                'Worked in a team of 5 on a React, .NET financial management web application to automate tracking of credit advance request pipeline and deal parameter calculation. Personal focus on query performance optimization and microservice migration.',
        },
        {
            experienceDetailId: 2,
            description:
                'Lead development of React/Redux (TypeScript) frontend migration, speeding up average completion time of common user actions by 20%. Implemented Cypress end-to-end testing.',
        },
        {
            experienceDetailId: 3,
            description:
                'Created build and deploy pipelines in Azure DevOps to support feature branch testing, continuous integration, and automated integration testing, reducing the number of defects released to master by 15%.',
        },
    ],
};

const mastercard: Experience = {
    experienceId: 1,
    name: 'Mastercard',
    roleName: 'Software Quality Engineer',
    startDate: new Date(2017, 6, 7),
    endDate: new Date(2020, 0, 8),
    companyUrl: 'https://mastercard.com',
    technologies: [csharp, react, typescript],
    experienceDetails: [
        {
            experienceDetailId: 1,
            description:
                'Collaborated in a team of 8 to design and implement a web application (React, .NET) to provide data visualizations using the Mastercard transaction log that would and enable financial institutions to make data-driven decisions. Focused on automated testing.',
        },
        {
            experienceDetailId: 2,
            description:
                'Worked in a team of 7 on a React, .NET application for optimizing instance setup and automating data model configuration for clients of the Mastercard analytic engine, enabling scalability by reducing instance setup time by 70%.',
        },
        {
            experienceDetailId: 3,
            description:
                'Developed user interface testing infrastructure in C# Selenium for React application, reducing production defects and increasing Jenkins deployment efficiency.',
        },
    ],
};

const bwx: Experience = {
    experienceId: 3,
    name: 'BWX',
    roleName: 'Engineering Intern',
    startDate: new Date(2016, 6, 10),
    endDate: new Date(2016, 7, 10),
    companyUrl: 'https://bwxtechnologies.com',
    technologies: [],
    experienceDetails: [
        {
            experienceDetailId: 1,
            description:
                'Designed chemical tank transfer system using AutoCAD to be used during plant operations involving a streamlined and reliable transfer of blended low-enriched Uranium.',
        },
    ],
};

const componentLibrary: Project = {
    projectId: 2,
    orderId: 1,
    technologies: [react, typescript, htmlCss],
    name: 'Component Library',
    tagline:
        'Define design-decisions up-front with a component library while leaving space for one-off departures.',
    githubUrl: 'https://github.com/nickjmorrow/react-component-library',
    demoUrl: 'https://nickjmorrow.github.io/react-component-library/',
    fileName: 'react_component_library.png',
};

const rankedChoice: Project = {
    projectId: 3,
    orderId: 3,
    technologies: [nodejs, react, typescript, postgres],
    name: 'Ranked Choice',
    tagline:
        'Create, vote, and simulate polls that use the ranked choice voting algorithm.',
    githubUrl: 'https://github.com/nickjmorrow/ranked-choice',
    demoUrl: null,
    fileName: 'ranked_choice.png',
};

const breakbuilder: Project = {
    projectId: 4,
    orderId: 4,
    technologies: [react, typescript],
    name: 'Breakbuilder',
    tagline: 'Plan out your yearly vacation and view related analytics.',
    githubUrl: 'https://github.com/nickjmorrow/breakbuilder',
    demoUrl: null,
    fileName: 'breakbuilder.png',
};

const whereToLive: Project = {
    projectId: 5,
    orderId: 5,
    technologies: [nodejs, react, typescript],
    name: 'Places To Live',
    tagline:
        'Rank places to live by useful metrics like population and job prospects.',
    githubUrl: 'https://github.com/nickjmorrow/where-to-live',
    demoUrl: null,
    fileName: 'where_to_live.png',
};

const weworkScheduler: Project = {
    projectId: 6,
    orderId: 6,
    technologies: [nodejs, react, typescript],
    name: 'WeWork Scheduler',
    tagline: 'Randomized chore scheduling for the Mastercard WeWork office.',
    githubUrl: 'https://github.com/nickjmorrow/wework-scheduler',
    demoUrl: null,
    fileName: 'wework_scheduler.png',
};

const blog: Project = {
    projectId: 7,
    orderId: 7,
    technologies: [react, typescript],
    name: 'Blog',
    tagline:
        'Personal blog to jot down thoughts on technology, software, and general development.',
    githubUrl: 'https://github.com/nickjmorrow/blog',
    demoUrl: 'https://alterview.io',
    fileName: '',
};

export const data: Data = {
    projects: [
        componentLibrary,
        rankedChoice,
        breakbuilder,
        whereToLive,
        weworkScheduler,
        blog,
    ],
    experiences: [fora, mastercard, bwx, tempus, zenlytic],
    technologies: [
        typescript,
        react,
        nodejs,
        postgres,
        htmlCss,
        csharp,
        sqlServer,
    ],
};
