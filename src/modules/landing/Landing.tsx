// external
import { Link } from 'src/modules/core/Link';
import { TextLink } from 'src/modules/core/TextLink';
import { GithubIcon } from 'src/modules/core/icons/GithubIcon';
import { LinkedInIcon } from 'src/modules/core/icons/LinkedInIcon';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Landing = () => {
    return (
        <Container>
            <UpperContent>
                <Name>Nicholas Morrow</Name>
                <CurrentPosition>
                    Senior Front End Engineer at{' '}
                    <TextLink href="https://zenlytic.com" target="_blank">
                        Zenlytic
                    </TextLink>
                </CurrentPosition>
            </UpperContent>
            <LowerContent>
                <Link href="https://github.com/nickjmorrow" target="_blank">
                    <GithubIcon />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/nickjmorrow/"
                    target="_blank"
                >
                    <LinkedInIcon />
                </Link>
            </LowerContent>
        </Container>
    );
};

const UpperContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss2};
`;

const LowerContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${theme.spacing.ss8};
    column-gap: ${theme.spacing.ss3};
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Name = styled.span`
    font-size: ${theme.fontSizes.fs9};
    font-family: ${theme.fontFamilies.title};
    color: ${theme.backgroundColor};
    font-weight: 700;
    letter-spacing: 2px;
`;

const CurrentPosition = styled.span`
    font-family: ${theme.fontFamilies.default};
    font-size: ${theme.fontSizes.fs5};
    color: ${theme.backgroundColor};
    font-weight: ${theme.fontWeights.fw5};
`;
