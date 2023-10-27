import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
      <section
          id="introduction"
          aria-label="Introduction"
          className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
      >
        <Container className="text-lg tracking-tight text-slate-700">
          <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
            &quot;Limitless Access to GPUs for Deep Learning&quot; is a platform that provides the resources you need to accelerate your deep learning projects.
          </p>
          <p className="mt-4">
            Before, accessing powerful GPUs for deep learning was a complex process, often involving expensive hardware and technical expertise. But now, with our platform, you can simplify this and have limitless access to GPU resources.
          </p>
          <p className="mt-4">
            Our platform offers a seamless experience, allowing you to focus on your deep learning tasks without worrying about the hardware limitations.
          </p>
          <p className="mt-4">
            With &quot;Limitless Access to GPUs for Deep Learning,&quot; you&apos;ll enjoy the following benefits:
          </p>
          <ul role="list" className="mt-8 space-y-3">
            {[
              'Accelerate model training with high-performance GPUs',
              'Effortlessly scale your deep learning projects',
              'Access a user-friendly interface for GPU management',
              'Simplify the deployment of deep learning frameworks',
              'Collaborate with a community of like-minded AI enthusiasts',
            ].map((feature) => (
                <li key={feature} className="flex">
                  <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                  <span className="ml-4">{feature}</span>
                </li>
            ))}
          </ul>
          <p className="mt-8">
            Join us today, and experience the limitless possibilities of deep learning with easy GPU access.
          </p>
          <p className="mt-10">
            <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdBpQnIawyhY3jJdPtvgb7TQvUAM-YuzmQxip_w_BplSBULeQ/viewform?usp=sf_link"
                className="text-base font-medium text-blue-600 hover:text-blue-800"
            >
             Get Started {' '}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </Container>
      </section>

  )
}
