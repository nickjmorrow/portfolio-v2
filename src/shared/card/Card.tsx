import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

export const Card = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px;
`;
