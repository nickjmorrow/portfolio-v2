// external
import React from 'react';
import { theme } from 'src/modules/theming';
import styled from 'styled-components';

export const Landing: React.FC = () => {
    return (
        <>
            <Name>Nicholas Morrow</Name>
        </>
    );
};

const Name = styled.span`
    font-size: ${theme.fontSizes.fs9};
    font-family: ${theme.fontFamilies.title};
    color: ${theme.backgroundColor};
    font-weight: 700;
    letter-spacing: 2px;
`;
