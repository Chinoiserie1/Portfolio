import { NextResponse } from 'next/server'

interface GithubRepository {
  name: string
  description: string
  homepageUrl: string
  url: string
  stargazerCount: number
}

interface GithubResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: GithubRepository[]
      }
    }
  }
}

export async function POST(request: Request) {
  const query = `
  {
    user(login: "Chinoiserie1") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            homepageUrl
            url
            stargazerCount
          }
        }
      }
    }
  }
  `

  try {
    const response = (await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }).then((r) => r.json())) as GithubResponse

    return NextResponse.json(response.data.user.pinnedItems.nodes, {
      status: 200,
    })
  } catch (e: unknown) {
    return NextResponse.json({ error: (e as Error).message }, { status: 400 })
  }
}
