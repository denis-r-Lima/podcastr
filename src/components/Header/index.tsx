import Link from 'next/link'

import { Container } from "./styles";
import { ThemeButton } from '../ThemeButton';

export function Header() {

    return(
        <Container>
            <Link href="/">
                <img src="/logo.svg" alt="Podcastr"/>
            </Link>
            <p>The WebDev podcast for you!</p>
            <ThemeButton />
        </Container>
    )
}