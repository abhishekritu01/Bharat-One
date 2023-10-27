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
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/shubham.jpeg'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
    return (
        <>
            <Hero />
            <Introduction />
            <NavBar />
            <TableOfContents />
            <Testimonial
                id="testimonial-from-tommy-stroman"
                author={{
                    name: 'Shubham Shekhar',
                    role: 'Founder of Anthrope.ai',
                    image: avatarImage1,
                }}
            >
                <p>
                    On-Demand cloud services offer unmatched convenience and scalability. Instant access to resources, cost efficiency, and flexibility make it an indispensable solution for modern businesses.
                </p>
            </Testimonial>
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