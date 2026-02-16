import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import clone from '@/images/cloneX.gif'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: "I'm Jérémie Lucotte. A Paris-based Full-Stack Developer with over five years of experience in the blockchain ecosystem and startup environments.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={clone}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Jérémie Lucotte. A Paris-based Full-Stack Developer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Jérémie Lucotte, a Paris-based Full-Stack Developer with
              over five years of experience in the blockchain ecosystem and
              startup environments.
            </p>
            <p>
              My work sits at the intersection of distributed systems, product
              engineering, and emerging technologies. I&apos;ve built secure
              smart contracts, decentralized applications, and production-grade
              web platforms, while progressively expanding into broader
              full-stack architectures, designing and delivering end-to-end
              systems that scale.
            </p>
            <p>
              Working in startups has shaped my engineering mindset. I&apos;ve
              learned to move quickly without compromising structure, to design
              systems with long-term maintainability in mind, and to balance
              technical excellence with real product impact. From early-stage
              prototypes to production deployments, I focus on building
              solutions that are robust, scalable, and aligned with user needs.
            </p>
            <p>
              My background in blockchain development strengthened my approach
              to security, performance, and system architecture. Developing
              decentralized systems requires careful reasoning about edge cases,
              reliability, and data integrity principles that now inform all
              the software I build, whether blockchain-based or not.
            </p>
            <p>
              Beyond hands-on development, I currently run the EECI-IGSC module
              program at CentraleSupélec, contributing to the design and
              structuring of advanced technical modules. This role allows me to
              combine technical depth with strategic thinking and educational
              impact, ensuring that innovation is supported by strong
              engineering foundations.
            </p>
            <p>
              Throughout my journey, I&apos;ve participated in and won
              hackathons, collaborated with multidisciplinary teams, and worked
              in fast-paced environments where adaptability and ownership are
              essential. These experiences have strengthened both my technical
              and collaborative skills.
            </p>
            <p>
              I am particularly interested in emerging fields such as artificial
              intelligence, robotics, and decentralized technologies. I&apos;m
              drawn to domains where engineering challenges push boundaries and
              where thoughtful system design can unlock entirely new
              possibilities.
            </p>
            <p>
              This portfolio reflects my evolution as a builder — from
              blockchain-native development to full-stack system architecture —
              and showcases projects that emphasize scalability, clarity, and
              long-term technical vision.
            </p>
            <p>
              I&apos;m always motivated by complex problems, ambitious products,
              and teams that aim to build meaningful technology.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/__chixx__eth" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://github.com/Chinoiserie1"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-lucotte-186686145/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:chixxdev@protonmail.me"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              chixxdev@proton.me
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
