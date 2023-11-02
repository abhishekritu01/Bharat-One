import React from 'react';
import avatarImage1 from '@/images/avatars/shubham.jpeg';
import avatarImage2 from '@/images/avatars/ankitSingh.jpeg';
import avatarImage3 from '@/images/avatars/lalitesh.jpeg';
import Image from 'next/image';

const testimonials = [
    {
        body:'  On-Demand cloud services offer unmatched convenience and scalability. Instant access to resources, cost efficiency, and flexibility make it an indispensable solution for modern businesses.',
       founderAt: {
            name: 'Shubham Shekhar',
            handle: 'Founder of Anthrope.ai',
            imageUrl: avatarImage1,
        },
    },
    {
        body:'GPU-supported cloud services provide essential scalability, immediate powerful resource access, cost-efficiency, and adaptability, catering to modern enterprises with high-performance computing demands.',
        founderAt: {
            name: 'Ankit Singh',
            handle: 'Founder of Rupifi',
            imageUrl: avatarImage2,
        },
    },{
        body:'Leveraging GPU-accelerated cloud services empowers businesses with essential scalability, immediate access to robust resources, cost-efficiency, and adaptability for high-performance computing needs.',
        founderAt: {
            name: 'Lalitesh Katragadda',
            handle: 'Founder of Indihood',
            imageUrl: avatarImage3,
        },
    }

];
const NewTestimonials = () => {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Testimonials</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                             Hear What Our Clients Have to Say!
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                        <div className="-mt-8 sm:-mx-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.founderAt.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                        <blockquote className="text-gray-900">
                                            <p>{`“${testimonial.body}”`}</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            <Image
                                                className="h-10 w-10 rounded-full bg-gray-50"
                                                src={testimonial.founderAt.imageUrl.src}
                                                alt=""
                                                width={64} // Set the width (adjust this value as needed)
                                                height={64} // Set the height (adjust this value as needed)
                                            />
                                            <div>
                                                <div className="font-semibold text-gray-900">{testimonial.founderAt.name}</div>
                                                <div className="text-gray-600">{`@${testimonial.founderAt.handle}`}</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewTestimonials;
