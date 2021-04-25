import Link from 'next/link'
import format from 'date-fns/format'

import { Container } from "./styles";

export function Header() {
    const currentDate = format(new Date(), 'EEE, do MMMM')

    return(
        <Container>
            <Link href="/">
                <img src="/logo.svg" alt="Podcastr"/>
            </Link>
            <p>The best for you, always!</p>
            <span>{currentDate}</span>
        </Container>
    )
}