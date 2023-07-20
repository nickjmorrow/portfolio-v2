import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'src/modules/core/Button';
import { Typography } from 'src/modules/core/Typography';
import { enterTimeouts } from 'src/modules/core/enterTimeouts';
import { HORIZONTAL_MARGIN } from 'src/modules/landing/constants';
import { theme } from 'src/modules/theming';
import styled, { keyframes } from 'styled-components';

export const Header = () => {
    return (
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
                {/* <a download href="/resume.pdf">
                    <ResumeButton>Resume</ResumeButton>
                </a> */}
            </InnerNavLinkContainer>
        </NavLinkContainer>
    );
};

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

const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`;

const InnerNavLinkContainer = styled.div`
    display: flex;
    gap: 0px ${theme.spacing.ss8};
    padding: ${theme.spacing.ss8} ${HORIZONTAL_MARGIN};
`;
