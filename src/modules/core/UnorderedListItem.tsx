import React from 'react';
import styled from 'styled-components';

export const UnorderedListItem = ({
    children,
    bulletStyles,
}: {
    children: React.ReactNode;
    bulletStyles?: React.CSSProperties;
}) => {
    return (
        <Li>
            <Container>
                <IconContainer>
                    <Bullet style={bulletStyles} />
                </IconContainer>
                <ContentContainer>{children}</ContentContainer>
            </Container>
        </Li>
    );
};

const Bullet = styled.div`
    height: 1px;
    min-width: 8px;
    background: white;
    position: relative;
    top: 11px;
    flex: 1;
    background-color: white;
`;

const Li = styled.li`
    list-style-type: none;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    column-gap: 6px;
    position: relative;
    left: -14px;
`;

const IconContainer = styled.div`
    width: 8px;
    min-width: 8px;
`;

const ContentContainer = styled.div``;
