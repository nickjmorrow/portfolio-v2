import styled from 'styled-components';
import { Section } from '../../shared/section/Section';

interface Props {}

export const Landing = () => {
    const navItems = [
        {
            label: 'about',
        },
        {
            label: 'projects',
        },
        {
            label: 'experiences',
        },
        {
            label: 'projects',
        },
        {
            label: 'contact',
        },
    ];
    return (
        <Section>
            <Header>
                <NavItemList>
                    {navItems.map((navItem) => {
                        return (
                            <NavItemListElement key={navItem.label}>
                                <NavItem>{navItem.label}</NavItem>
                            </NavItemListElement>
                        );
                    })}
                </NavItemList>
            </Header>
            <Name>Nicholas Morrow</Name>
        </Section>
    );
};

const Header = styled.header``;

const NavItemList = styled.ul``;

const NavItemListElement = styled.li``;

const NavItem = styled.a``;

const Name = styled.div`
    color: black;
`;
