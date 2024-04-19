import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
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

function Tool({
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

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M2 Pro (2021)">
            the MacBook Pro 14, is pivotal for its outstanding performance and
            seamless integration with the Apple ecosystem. Its powerful
            processors handle my creative and technical tasks effortlessly,
            while the Retina display offers stunning visual clarity, essential
            for my design and editing work. The laptop&apos;s robust build and
            macOS reliability allow me to work efficiently and with fewer
            interruptions, making it an invaluable tool in my professional
            toolkit.
          </Tool>
          <Tool title="Herman Miller Mirra Chair">
            Comfort meets design with the Herman Miller Mirra chair. Engineered
            for durability and ergonomic support, this chair ensures that long
            hours at the desk are spent in utmost comfort. This chair is not
            just a part of my office it enhances my productivity and well-being
            throughout the workday.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Visual Studio Code is my preferred editor for coding and development
            projects. It offers an intuitive interface, integrated Git control,
            and extensive plugin support, enabling a highly customizable
            environment that adapts to my workflow.
          </Tool>
          <Tool title="Warp">
            Warp terminal is my chosen command-line interface. This tool is
            indispensable for achieving precision and speed in my coding
            environment.
          </Tool>
          <Tool title="pgAdmin 4">
            pgAdmin 4 is my preferred management tool for PostgreSQL databases.
            It provides a comprehensive and intuitive web-based interface that
            simplifies database administration.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="ChatGPT-4">
            As a developer, ChatGPT-4 is an integral part of my toolkit for
            building and enhancing interactive applications. This advanced tool
            helps me reduce the time spent on writing boilerplate code and
            debugging language-based functions. By streamlining these tasks,
            ChatGPT-4 enables me to focus more on the creative and strategic
            aspects of development, enhancing overall productivity and the
            quality of the applications I build.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
