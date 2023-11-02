import clsx from 'clsx'

import { Button } from '@/components/Button'

import { Container } from '@/components/Container'

import { SectionHeading } from '@/components/SectionHeading'
import Image from "next/image";
import nvidia from "../../public/images/resources/nvidai.jpg";
import newron from "../../public/images/resources/newron_logo.jpeg";



const company = [
  {
    title: 'Nvidia Corporation',
    description:
        'Nvidia Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California. It designs graphics processing units for the gaming and professional markets, as well as system on a chip units for the mobile computing and automotive market.',
    image: function FigmaImage() {
      return (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
            <Image src={nvidia} alt="" unoptimized />
          </div>
      )
    },
  },{
    title: 'Newron.ai',
    description:
        'Newron.ai is a company that provides a platform for building and deploying machine learning models. It offers a platform that enables users to build, train, and deploy machine learning models. The company also provides a platform that enables users to build, train, and deploy machine learning models.',
    image: function FigmaImage() {
      return (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Image src={newron} alt="" unoptimized />
          </div>
      )
    },
  },

]


export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32 "
    >
      <Container>
        <SectionHeading number="4" id="pricing-title">
          ML PARTNERS
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            We are proud to partner with the following companies
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Our collaborations with these esteemed companies enable us to deliver innovative and impactful design solutions. Together, we create designs that leave a lasting impression.
        </p>
        <Container size="lg" className="mt-16">
          <ol
              role="list"
              className="-mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
          >
            {company.map((resource) => (

                // <li
                //     key={resource.title}
                //     className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 border border rounded-2xl "
                // >
                //   <div className="flex justify-center items-center">
                //     <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-40 lg:h-40 my-4 overflow-hidden rounded-2xl ">
                //       {resource.image()}
                //     </div>
                //
                //   </div>
                //   <div>
                //     <h3 className="text-base font-medium tracking-tight text-slate-900">
                //       {resource.title}
                //     </h3>
                //
                //     <p className="mt-4 max-w-xl text-sm tracking-tight text-slate-600">
                //       {resource.description}
                //     </p>
                //   </div>
                //   <div className="flex my-4 flex-col items-center justify-center">
                //     <Button href="#pricing" variant="outline" color="blue">
                //       Learn More
                //     </Button>
                //   </div>
                // </li>

                <li
                    key={resource.title}
                    className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3"
                    style={{ border: "2px solid #e5e7eb" ,borderRadius:'10px' }} // Example border styles
                >
                  <div className="flex justify-center items-center">
                    <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-40 lg:h-40 my-4 overflow-hidden rounded-2xl">
                      {resource.image()}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight text-slate-900">
                      {resource.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm tracking-tight text-slate-600">
                      {resource.description}
                    </p>
                  </div>
                  <div className="flex my-4 flex-col items-center justify-center">
                    <Button href="#pricing" variant="outline" color="blue">
                      Learn More
                    </Button>
                  </div>
                </li>

            ))}
          </ol>
        </Container>
      </Container>


    </section>
  )
}
