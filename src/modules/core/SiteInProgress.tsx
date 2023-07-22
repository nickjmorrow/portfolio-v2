import { Container } from 'src/modules/core/Container';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const SiteInProgress = () => {
    return (
        <CustomContainer>
            <ContentContainer>
                <Text>Site In Progress</Text>
                <SubText>
                    Also I have a job right now and am not looking for
                    opportunities. Thank you!
                </SubText>
            </ContentContainer>
        </CustomContainer>
    );
};

const CustomContainer = styled(Container)`
    background: white;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    position: relative;
    top: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Text = styled.p`
    color: red;
    font-size: ${theme.fontSizes.fs11};
    font-family: ${theme.fontFamilies.cursive};
    text-align: center;
`;

const SubText = styled(Text)`
    font-size: ${theme.fontSizes.fs5};
    font-family: ${theme.fontFamilies.default};
`;
