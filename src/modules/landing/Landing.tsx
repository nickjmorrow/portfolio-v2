// external
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Landing = () => {
    return (
        <Container>
            <UpperContent>
                <Name>Nicholas Morrow</Name>
                <CurrentPosition>
                    Senior Front End Engineer at Zenlytic
                </CurrentPosition>
            </UpperContent>
            <SocialMediaList></SocialMediaList>
        </Container>
    );
};

const SocialMediaList = styled.ul`
    margin-bottom: ${theme.spacing.ss16};
`;

const UpperContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing.ss2};
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
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
