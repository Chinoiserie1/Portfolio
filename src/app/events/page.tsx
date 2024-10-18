import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function EventsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Events() {
  return (
    <SimpleLayout
      title="Events I've been a part of"
      intro="One of the best parts of my journey has been the opportunity to meet and speak with so many people. Here are some of the events I’ve been a part of."
    >
      <div className="space-y-20">
        <EventsSection title="Hackathons">
          <Appearance
            href="https://society.ton.org/paris-bootcamp-hackers-league-hackathon-oct-18"
            title="Paris Bootcamp | Hackers League Hackathon"
            description="Get ready for 19 events worldwide, offering full immersion into the TON ecosystem with workshops, lectures, and entertainment activities."
            event="TON Society"
            cta="link to event"
          />
          <Appearance
            href="https://devpost.com/software/securedocs"
            title="Block Magic Hackathon"
            description="Chainlink hackathons empower developers to leverage industry-standard Chainlink services to create novel applications with exceptional user experiences."
            event="Chainlink"
            cta="link to your project"
          />
        </EventsSection>
      </div>
    </SimpleLayout>
  )
}
