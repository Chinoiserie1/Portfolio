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
  description: 'I’m Jérémie Lucotte. A free-lance blockchain developper',
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
            I’m Jérémie Lucotte. I live in Paris.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a Blockchain Developer with a deep-rooted passion for
              technology and an unwavering ambition to evolve into a Full Stack
              Developer. Currently based in the dynamic tech landscape of Paris,
              my journey has been fueled by a fascination with the revolutionary
              potential of blockchain technology and a desire to broaden my
              horizons across the entire development stack.
            </p>
            <p>
              With a robust foundation in creating secure and innovative
              blockchain solutions, including smart contracts, decentralized
              applications (dApps), and NFTs, I have honed my skills in the
              intricacies of decentralized technology. My work has not only been
              about crafting solutions but also about envisioning and bringing
              to life applications that redefine interactions and transactions
              in the digital age.
            </p>
            <p>
              As I venture into the realms of Full Stack Development, my goal is
              to integrate my blockchain expertise with comprehensive knowledge
              and skills in frontend and backend development. This transition is
              driven by a desire to build more holistic and versatile tech
              solutions—ones that encapsulate the essence of both the user
              interface and the underlying blockchain technology.
            </p>
            <p>
              This portfolio is a testament to my journey so far and my path
              forward. It showcases projects that underline my expertise in
              blockchain while gradually incorporating full stack projects that
              reflect my evolving skill set. My ambition is to bridge the gap
              between the decentralized and traditional web development worlds,
              delivering seamless, secure, and innovative solutions.
            </p>
            <p>
              Whether you&apos;re here to explore blockchain projects, full
              stack developments, or the intersection of both, I invite you to
              delve into my work. Let&apos;s navigate the future of technology
              together, building solutions that stand at the forefront of
              innovation and user experience.
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
