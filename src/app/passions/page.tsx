import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import image1 from '@/images/photos/CloneX_14800.png'
import image2 from '@/images/photos/CloneX_18443.png'
import image3 from '@/images/photos/TetoFaberger.png'

function PassionsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Passions({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

const NavItem = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href} className="text-teal-600">
      {children}
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2']
  let paths = [
    'https://opensea.io/fr/assets/ethereum/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/17464',
    'https://opensea.io/fr/assets/ethereum/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/8075',
    'https://opensea.io/fr/assets/ethereum/0x4344d811f26322944136e9878109339f405cc223/32',
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3].map((image, imageIndex) => (
          <Link
            href={paths[imageIndex]}
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Passions',
  description:
    'Passionate about the digital and gaming worlds, with a particular interest in NFTs and games in all their forms.',
}

export default async function ArticlesIndex() {
  return (
    <SimpleLayout
      title="What I like to do and NFTs I own"
      intro="Passionate about the digital and gaming worlds, with a particular interest in NFTs and games in all their forms."
    >
      <div className="space-y-20">
        <PassionsSection title="Travel">
          <Passions title="Transatlantic Sailing with My Father">
            Embarking on a transatlantic voyage by sailboat with my father was a
            transformative experience that taught me resilience, navigation
            skills, and the importance of meticulous planning. This journey not
            only strengthened our bond but also deepened my appreciation for the
            vastness and beauty of the ocean.
          </Passions>
          <Passions title="Exploration of Europe">
            I have traveled extensively across Europe, visiting England,
            Germany, Italy, Spain, and Portugal. These trips allowed me to
            immerse myself in diverse cultures, languages, and historical
            contexts, enhancing my adaptability and global awareness. Each
            country offered unique insights into different ways of life and
            broadened my perspective on world cultures.
          </Passions>
          <Passions title="Adventures in Asia">
            My travels in Asia included visits to Hong Kong, Japan, China, the
            Philippines, and Bali. These experiences exposed me to rich
            traditions, cutting-edge technology, and varied landscapes. From the
            bustling markets of Hong Kong to the serene temples of Bali, each
            destination offered a new understanding of cultural intricacies and
            the importance of cultural sensitivity.
          </Passions>
        </PassionsSection>
        <PassionsSection title="Anime">
          <Passions title="Japenese animation">
            I am passionate about Japanese animation, particularly valuing its
            unique visual style and captivating characters. The meticulous and
            often innovative aesthetics of anime enrich each series visually,
            providing an unmatched immersive experience compared to other media
            forms. Furthermore, I am fascinated by the complex development of
            characters in anime; these characters evolve through intricate
            dilemmas and personal growth, resonating deeply with me. This
            passion for anime enhances my creativity and my ability to
            appreciate diverse narrative perspectives, skills that I bring to my
            professional environment.
          </Passions>
        </PassionsSection>
        <PassionsSection title="Game">
          <Passions title="Video Game">
            I have a deep enthusiasm for video games, especially titles like
            Animal Crossing, SimCity, and Fortnite. These games are not only
            entertaining but also stimulate creativity and strategic thinking.
            Animal Crossing and SimCity have fostered my skills in resource
            management and urban planning, enhancing my attention to detail and
            ability to foresee and solve complex problems. Meanwhile, Fortnite
            has honed my quick decision-making skills and adaptability under
            pressure. Engaging with these games has also refined my teamwork and
            communication abilities, as I often collaborate and strategize with
            other players globally. This passion for gaming enriches my
            problem-solving capabilities and interpersonal skills, valuable
            assets in my professional toolkit.
          </Passions>
          <Passions title="Card Game">
            I am an avid player of strategic card games, including Yu-Gi-Oh! and
            Hearthstone. These games challenge me to think critically and
            strategically, skills that are crucial in both personal and
            professional settings. Yu-Gi-Oh!, with its complex rules and the
            necessity for tactical foresight, enhances my ability to plan under
            pressure and predict opponents’ moves. Hearthstone requires a blend
            of strategy and adaptability, encouraging me to continuously rethink
            tactics and make decisions dynamically. Engaging in these card games
            has significantly sharpened my analytical skills and improved my
            capacity for problem-solving. Moreover, these games offer
            opportunities to engage with a global community, fostering my
            communication skills and cultural awareness.
          </Passions>
        </PassionsSection>
        <Photos />
        <PassionsSection title="NFTS">
          <Passions title="RTFKT">
            I am deeply engaged with the RTFKT universe, showcasing a keen
            interest in the intersection of digital art and technology. My
            collection includes notable pieces from various RTFKT
            collaborations, such as CloneX and Animus, created with the renowned
            artist Takashi Murakami. I own several NFTs from these collections,
            demonstrating my commitment to supporting innovative digital art.
            Additionally, I possess the first native Web3 sneaker, the Blackout
            Cryptokicks iRL, which merges decades of Nike innovation with
            RTFKT&apos;s digital-physical hybrid vision. My involvement also
            extends to exclusive apparel and sneaker collections like the RTFKT
            Clone X Forging SZN 1, featuring limited edition RTFKT x Nike Air
            Force 1s designed by Murakami. This collection underlines my passion
            for unique collaborations that blend iconic designs with advanced
            digital trends, emphasizing my active participation in the forefront
            of digital culture and community engagement.
          </Passions>
          <Passions title="Memeland - Captainz & Potatoz">
            Memeland&apos;s Captainz and Potatoz collections symbolize different
            levels of membership within this fun and energetic community. I own
            a Captainz (
            <NavItem href="https://opensea.io/fr/assets/ethereum/0x769272677fab02575e84945f03eca517acc544cc/443">
              #443
            </NavItem>
            ) and a Potatoz (
            <NavItem href="https://opensea.io/fr/assets/ethereum/0x39ee2c7b3cb80254225884ca001f57118c8f21b6/5515">
              #5515
            </NavItem>
            ), engaging with a creative group that blends internet culture with
            digital collectibles. .
          </Passions>
        </PassionsSection>
        <PassionsSection title="Art">
          <Passions title="Panopticon by teto">
            Panopticon is an on-chain generative art project that I am involved
            with, owning a piece of this collection which connects me to a
            community passionate about blockchain-based art.{' '}
            <NavItem href="https://opensea.io/fr/assets/ethereum/0xa1a657de1f522f15a7336942145fa3c5432dd44e/341">
              opensea.io
            </NavItem>
          </Passions>
          <Passions title="Takashi Murakami">
            As one of my favorite artists, I own several pieces by Takashi
            Murakami, including prints and pillows. This collection not only
            feeds my aesthetic appreciation but also ties me to a global
            community of art collectors.
          </Passions>
          <Passions title="Bearbricks">
            I am also an enthusiast of Bearbricks, collectible toys that blend
            modern art with popular culture, further expressing my interest in
            the intersection of art and consumer culture.
          </Passions>
        </PassionsSection>
      </div>
    </SimpleLayout>
  )
}
