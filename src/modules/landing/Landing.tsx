// external
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'src/modules/core/Button';
import { Typography } from 'src/modules/core/Typography';
import { enterTimeouts } from 'src/modules/core/enterTimeouts';
import { theme } from 'src/modules/theming';
import styled, { keyframes } from 'styled-components';

export const Landing: React.FC = () => {
    return (
        <>
            <Container>
                <NavLinkContainer>
                    <InnerNavLinkContainer>
                        {navLinks.map((nl) => (
                            <AnchorLink
                                key={nl.label}
                                href={`#${nl.label}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <NavLink>{nl.label}</NavLink>
                            </AnchorLink>
                        ))}
                        <a download href="/resume.pdf">
                            <ResumeButton>Resume</ResumeButton>
                        </a>
                    </InnerNavLinkContainer>
                </NavLinkContainer>
                <ContentContainer>
                    <Name>Nicholas Morrow</Name>
                    <About>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Sit amet porttitor eget dolor
                            morbi non arcu. Mollis aliquam ut porttitor leo a
                            diam sollicitudin.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Posuere urna nec tincidunt
                            praesent semper. Consectetur adipiscing elit ut
                            aliquam. Donec ac odio tempor orci.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Dolor sit amet consectetur
                            adipiscing elit duis tristique.
                        </Paragraph>
                    </About>
                </ContentContainer>
            </Container>
        </>
    );
};

const Paragraph = styled.p``;

const navLinks = [
    {
        label: 'about',
        enterTimeout: enterTimeouts.about,
    },
    {
        label: 'projects',
        enterTimeout: enterTimeouts.projects,
    },
    {
        label: 'experiences',
        enterTimeout: enterTimeouts.experiences,
    },
    {
        label: 'contact',
        enterTimeout: enterTimeouts.contact,
    },
];

const changeBackgroundPosition = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const ResumeButton = styled(Button)`
    background: linear-gradient(
        60deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
    );
    background-size: 300% 300%;
    animation: ${changeBackgroundPosition} 5s ease infinite;
`;

const NavLink = styled(Typography)`
    display: block;
    padding: ${theme.spacing.ss4} ${theme.spacing.ss2};
    color: ${theme.neutralColor.cs1};
`;

const ContentContainer = styled.div`
    position: relative;
    top: 20%;
    left: 10%;
    width: 100%;
    display: flex;
    column-gap: ${theme.spacing.ss16};
    height: max-content;
`;

const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    background-color: ${theme.neutralColor.cs9};
`;

const InnerNavLinkContainer = styled.div`
    display: flex;
    gap: 0px ${theme.spacing.ss8};
    padding: ${theme.spacing.ss8} ${theme.spacing.ss8};
`;

const Container = styled.div`
    height: 100vh;
`;

const Name = styled.span`
    font-size: ${theme.fontSizes.fs11};
    font-family: ${theme.fontFamilies.title};
    color: ${theme.backgroundColor};
    font-weight: 700;
    letter-spacing: 2px;
`;

const About = styled.div`
    max-width: 600px;
`;
