import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Text } from 'src/modules/core/Text';
import { enterTimeouts } from 'src/modules/core/enterTimeouts';
import { HORIZONTAL_MARGIN } from 'src/modules/landing/constants';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

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

const NavLink = styled(Text)`
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
