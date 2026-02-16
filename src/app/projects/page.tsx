import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import {
  ProjectCard,
  type Project,
} from '@/components/ProjectHoverDialog'
import logoUndoxxed from '@/images/logos/UNDXX.svg'
import logoPolygon from '@/images/logos/polygon-matic-logo.svg'
import logoMetahood from '@/images/logos/metahood.ico'
import logoArthera from '@/images/logos/arthera.png'
import logoMintup from '@/images/logos/mintup.ico'
import logoTrenches from '@/images/logos/trenches.png'
import logoCushion from '@/images/logos/logoCushion.svg'
import logoEECI from '@/images/logos/eeci.webp'

const projects: Project[] = [
  {
    name: 'EECI',
    description: 'European Embedded Control Institute',
    link: { href: 'https://www.eeci-igsc.eu/', label: 'eeci-igsc.eu' },
    logo: logoEECI,
    details: {
      description:
        'Website for an international graduate school on control engineering, featuring course management and registration systems.',
      techStack: [
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Resend', icon: 'resend' },
        // { name: 'Matomo', icon: 'matomo' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Prisma', icon: 'prisma' },
        { name: 'Git', icon: 'git' },
        { name: 'Vercel', icon: 'vercel' },
      ],
      role: 'Full-stack Developer',
      status: 'live',
      features: [
        'Module catalog and registration system',
        'back-office for course management',
        'Stripe integration for payments',
        'User account management',
        'email using resend',
        'Analytics using matomo',
        'CI/CD pipeline using vercel, github actions and husky',
      ],
    },
  },
  {
    name: 'Trenches',
    description: 'Tokenize your reputation as an alpha caller. RADAR Colosseum hackathon winner',
    link: { href: 'https://trenches.top', label: 'trenches.top' },
    logo: logoTrenches,
    details: {
      description:
        'An app that allows crypto traders to tokenize their track record and reputation, enabling followers to copy trades.',
      techStack: [
        { name: 'Rust', icon: 'rust' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Solana', icon: 'solana' },
        { name: 'Express.js', icon: 'express' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Prisma', icon: 'prisma' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Railway', icon: 'railway' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Git', icon: 'git' },
        { name: 'TypeScript', icon: 'typescript' },
      ],
      role: 'Full-stack Developer',
      status: 'archived',
      features: [
        'Bonding curve for alpha caller reputation',
        'On-chain performance tracking',
        'Copy trading mechanism',
        'telegram bot',
      ],
    },
  },
  {
    name: 'Cushion',
    description: 'CPPI strategy vault, max TVL 250k USD',
    link: { href: 'https://www.cushion.trade', label: 'cushion.trade' },
    logo: logoCushion,
    details: {
      description:
        'A DeFi vault implementing Constant Proportion Portfolio Insurance (CPPI) strategy for risk-managed yield generation.',
      techStack: [
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Python', icon: 'python' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Prisma', icon: 'prisma' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Railway', icon: 'railway' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Git', icon: 'git' },
      ],
      role: 'Full-stack Developer',
      status: 'archived',
      features: [
        'CPPI strategy implementation',
        'ERC4626 vault standard',
        'Automated rebalancing',
        'Risk parameter configuration',
      ],
    },
  },
  {
    name: 'Metahood',
    description: 'NFTs marketplace for metaverse assets',
    link: { href: 'https://metahood.xyz', label: 'metahood.xyz' },
    logo: logoMetahood,
    details: {
      description:
        'A specialized NFT marketplace focused on metaverse real estate and virtual assets trading.',
      techStack: [
        { name: 'Solidity', icon: 'solidity' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'IPFS', icon: 'ipfs' },
        { name: 'Ethereum', icon: 'ethereum' },
      ],
      role: 'Blockchain Developer',
      status: 'live',
      features: [
        'Multi-chain NFT listings',
        'Metaverse asset categorization',
        'Auction and fixed-price sales',
      ],
    },
  },
  {
    name: 'Undoxxed Book website',
    description: 'Mint website using next.js and postgreSQL',
    link: { href: 'https://mint.undoxxedbook.com', label: 'undoxxedbook.com' },
    logo: logoUndoxxed,
    details: {
      description:
        'NFT minting website for Undoxxed Book collection with waitlist management and minting phases.',
      techStack: [
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Prisma', icon: 'prisma' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
      ],
      role: 'Full-stack Developer',
      status: 'live',
      features: [
        'Multi-phase minting (whitelist, public)',
        'Wallet verification',
        'Real-time mint tracking',
      ],
    },
  },
  {
    name: 'Undoxxed Book smart-contract',
    description: 'ERC721 contract on Ethereum audited by Opengem',
    link: {
      href: 'https://etherscan.io/address/0xe1c3f463e2f57752de04a1333aa55970819bdc4e',
      label: 'etherscan.io',
    },
    logo: logoUndoxxed,
    details: {
      description:
        'Production ERC721 smart contract deployed on Ethereum mainnet, professionally audited for security.',
      techStack: [
        { name: 'Solidity', icon: 'solidity' },
        { name: 'Hardhat', icon: 'hardhat' },
        { name: 'Ethereum', icon: 'ethereum' },
      ],
      role: 'Smart Contract Engineer',
      status: 'live',
      features: [
        'Gas-optimized minting',
        'Merkle tree whitelist verification',
        'Royalty support (ERC2981)',
        'Audited by Opengem',
      ],
    },
  },
  {
    name: 'Eteos',
    description:
      'UUPS Proxy, ERC721 with on-chain metadata for real world asset',
    link: { href: 'https://eteos.io', label: 'eteos.io' },
    logo: logoPolygon,
    details: {
      description:
        'Real-world asset tokenization platform using upgradeable smart contracts with fully on-chain metadata.',
      techStack: [
        { name: 'Solidity', icon: 'solidity' },
        { name: 'Polygon', icon: 'polygon' },
        { name: 'Hardhat', icon: 'hardhat' },
        { name: 'Next.js', icon: 'nextjs' },
      ],
      role: 'Lead Blockchain Developer',
      status: 'archived',
      features: [
        'UUPS upgradeable proxy pattern',
        'On-chain SVG metadata generation',
        'RWA compliance features',
      ],
    },
  },
  {
    name: 'Mintup',
    description: 'ERC721 factory',
    link: { href: 'https://mintup.io/fr', label: 'mintup.io' },
    logo: logoMintup,
    details: {
      description:
        'No-code NFT collection deployment platform allowing creators to launch their own ERC721 contracts.',
      techStack: [
        { name: 'Solidity', icon: 'solidity' },
        { name: 'React', icon: 'react' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Ethereum', icon: 'ethereum' },
      ],
      role: 'Smart Contract Developer',
      status: 'archived',
      features: [
        'Factory pattern deployment',
        'Customizable contract parameters',
        'Multi-chain support',
      ],
    },
  },
  {
    name: 'Pixchain',
    description: 'Smart-contract ERC721',
    link: { href: 'https://pixchain.app', label: 'pixchain.app' },
    logo: logoArthera,
    details: {
      description:
        'NFT collection deployed on Arthera blockchain for digital art and collectibles.',
      techStack: [
        { name: 'Solidity', icon: 'solidity' },
        { name: 'Hardhat', icon: 'hardhat' },
        { name: 'TypeScript', icon: 'typescript' },
      ],
      role: 'Blockchain Developer',
      status: 'archived',
      features: [
        'ERC721 implementation',
        'Arthera chain deployment',
        'Metadata management',
      ],
    },
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've made trying to put my dent in the universe."
      intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
