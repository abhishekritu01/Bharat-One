import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'STORAGE': {
    'High-speed filesystem for GPU instances': 1,
    'Create filesystems in Bharat1 On-Demand Cloud to persist files and data with your compute.': 2,
    'Scalable performance: Adapts to growing storage needs without compromising speed.': 3,
    'Cost-efficient: Only pay for the storage you use, optimizing budget allocation.*': 4,
    'No limitations: No ingress, no egress and no hard limit on how much you can store.': 5,
  },
  'HOST & SHARE GENERATIVE AI APPS': {
    'Easy hosting: Bharat1 Demos simplifies the hosting of Gradio-powered Generative AI apps.': 1,
    'Cut costs, host apps on A10 server for optimal affordability.': 2,
    'Public or private sharing: Share your apps with the wider ML community or privately with individuals.': 3,
    'No limitations: No restrictions on usage, allowing you to share and host without constraints.': 4,
  },
  'SPEND LESS': {
    'Affordable: Bharat1 Cloud Clusters are the most affordable cloud GPU solution on the market.': 1,
    'No hidden fees: No hidden fees or charges. You only pay for what you use.': 2,
    'No commitments: No long-term commitments or contracts. Cancel anytime.': 3,
    'No limitations: No restrictions on usage, allowing you to train without constraints.': 4,
  },
};

export function TableOfContents() {
  return (
      <section
          id="table-of-contents"
          aria-labelledby="table-of-contents-title"
          className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
      >
        <Container>
          <SectionHeading number="1" id="table-of-contents-title">
            Table of Contents
          </SectionHeading>
          <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            Clousd Storage, Hosting, and Sharing
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            On-Demand Cloud is a cloud GPU platform that offers high-performance computing at affordable prices. With On-Demand Cloud, you can access cloud GPUs instantly and accelerate your work with affordable, high-performance cloud GPUs, available at your fingertips.
          </p>

          <Expandable>
            <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
              <ExpandableItems>
                {Object.entries(tableOfContents).map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                          role="list"
                          className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                            <li
                                key={title}
                                className="flex justify-between py-3"
                                aria-label={`${title} on page ${pageNumber}`}
                            >
                        <span
                            className="font-medium text-slate-900"
                            aria-hidden="true"
                        >
                          {title}
                        </span>
                              <span
                                  className="font-mono text-slate-400"
                                  aria-hidden="true"
                              >
                          {pageNumber}
                        </span>
                            </li>
                        ))}
                      </ol>
                    </li>
                ))}
              </ExpandableItems>
            </ol>
            <ExpandableButton>See more</ExpandableButton>
          </Expandable>
        </Container>
      </section>
  )
}
