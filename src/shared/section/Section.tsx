import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

export const Section = ({ children }: Props) => {
    return <Container>{children}</Container>
}

const Container = styled.div`
    border: 1px solid red;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
