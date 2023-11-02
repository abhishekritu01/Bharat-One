import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import NewTestimonials from "../components/NewTestimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Introduction />
            <NavBar />
            <TableOfContents />
            <NewTestimonials />
            <Screencasts />
            <Resources />
            <FreeChapters />
            <Pricing />
            {/*<Testimonials />*/}
            <Author />
            <Footer />
        </>
    )
}
