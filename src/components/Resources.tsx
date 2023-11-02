import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import nvidiaGPUImage from '../../public/images/nvidia-h100.png'
import nvidiaCommunityImage from '../../public/images/nvidia-h100.png'

//
// const resources = [
//   {
//     title: 'Figma icon templates',
//     description:
//       'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
//     image: function FigmaImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
//           <Image src={figmaImage} alt="" unoptimized />
//         </div>
//       )
//     },
//   },
//   {
//     title: 'Weekly icon teardowns',
//     description:
//       'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
//     image: function VideoPlayerImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Image
//             className="absolute inset-0 h-full w-full object-cover"
//             src={abstractBackgroundImage}
//             alt=""
//             sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
//           />
//           <Image
//             className="relative"
//             src={videoPlayerImage}
//             alt=""
//             unoptimized
//           />
//         </div>
//       )
//     },
//   },
//   {
//     title: 'Community of icon designers',
//     description:
//       "A private Discord server where you can get help and give feedback on each others' work.",
//     image: function DiscordImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
//           <Image src={discordImage} alt="" unoptimized />
//         </div>
//       )
//     },
//   },
// ]
//
// export function Resources() {
//   return (
//     <section
//       id="resources"
//       aria-labelledby="resources-title"
//       className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
//     >
//       <Container>
//         <SectionHeading number="3" id="resources-title">
//           Resources
//         </SectionHeading>
//         <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
//           Tools and resources you can use to get started even faster and
//           progress even further.
//         </p>
//         <p className="mt-4 text-lg tracking-tight text-slate-700">
//           Design assets, icon teardowns, and a community of fellow icon
//           designers where you can ask questions, get feedback, and accelerate
//           your learning.
//         </p>
//       </Container>
//       <Container size="lg" className="mt-16">
//         <ol
//           role="list"
//           className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
//         >
//           {resources.map((resource) => (
//             <li
//               key={resource.title}
//               className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
//             >
//               <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
//                 <resource.image />
//               </div>
//               <div>
//                 <h3 className="text-base font-medium tracking-tight text-slate-700">
//                   {resource.title}
//                 </h3>
//                 <p className="mt-2 text-sm text-slate-600">
//                   {resource.description}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </Container>
//     </section>
//   )
// }

const resources = [
    {
        title: 'GPU Advantages',
        description:
            'Designed for large-scale model training, Bharat1 Cloud Clusters offer high-performance networking and enterprise-grade GPUs, with a non-blocking network architecture for seamless deployment.',
        image: function NvidiaGPUImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <Image src={nvidiaGPUImage} alt="" unoptimized />
                </div>
            );
        },
    },
    {
        title: 'Endorsed by professionals.',
        description:'Endorsed by leading AI engineers, Bharat1\'s Cloud is the choice of industry pioneers who have been instrumental in advancing computer vision, natural language processing, and robotics in modern deep learning.',
        image: function NvidiaCommunityImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                    <Image src={nvidiaCommunityImage} alt="" unoptimized />
                </div>
            );
        }
    },
    {
        title: 'Readily accessible.',
        description:'Our cloud clusters feature cutting-edge H100 Tensor Core GPUs, ensuring unmatched performance, scalability, and security across all workloads. The H100 leverages revolutionary Hopper™ architecture, powering industry-leading conversational AI and accelerating large language models.',
        image: function TutorialImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                    <Image src={nvidiaCommunityImage} alt="" unoptimized />
                </div>
            );
        }
    }
];

export function Resources() {
    return (
        <section
            id="resources"
            aria-labelledby="resources-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="3" id="resources-title">
                    Cloud Cluster
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Secure thousands of H100 cloud instances for top-notch performance and robust protection, all with incredible affordability.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Train Foundation Models and Large Language Models (LLMs) using Bharat1 Cloud Clusters equipped with NVIDIA H100 GPUs and blazing-fast 3200 Gbps Infiniband.
                </p>
            </Container>
            <Container size="lg" className="mt-16">
                <ol
                    role="list"
                    className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
                >
                    {resources.map((resource) => (
                        <li
                            key={resource.title}
                            className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
                        >
                            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                <resource.image />
                            </div>
                            <div>
                                <h3 className="text-base font-medium tracking-tight text-slate-700">
                                    {resource.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    {resource.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
