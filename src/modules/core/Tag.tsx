import { Text } from 'src/modules/core/Text';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Tag = ({ label }: { label: string }) => {
    return <StyledTag>{label}</StyledTag>;
};

const StyledTag = styled(Text)`
    list-style: none;
    margin: 0;
    padding: ${theme.spacing.ss1} ${theme.spacing.ss2};
    display: inline;
    background-color: ${theme.accentColor.cs7};
    color: ${theme.accentColor.cs1};
    border-radius: ${theme.borderRadius.br2};
    font-size: ${theme.fontSizes.fs2};
`;
