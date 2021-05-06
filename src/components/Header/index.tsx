import Link from 'next/link'

import { Container } from "./styles";
import { ThemeButton } from '../ThemeButton';
import { useAuthenticationContext } from '../../contexts/authenticationContext';

export function Header() {

    const { userName } = useAuthenticationContext()

    return(
        <Container>
            <Link href="/">
                <img src="/logo.svg" alt="Podcastr"/>
            </Link>
            <p>The WebDev podcast for {userName ? userName : 'you'}!</p>
            <ThemeButton />
        </Container>
    )
}