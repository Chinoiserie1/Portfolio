'use client'

import { useState, useEffect } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { CVDocument } from './CVDocument'

export function CVDownloadButton() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <span className="cursor-pointer transition hover:text-teal-500 dark:hover:text-teal-400">
        Download CV
      </span>
    )
  }

  return (
    <PDFDownloadLink
      document={<CVDocument />}
      fileName="Jeremie-Lucotte-CV.pdf"
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {({ loading }) => (loading ? 'Generating...' : 'Download CV')}
    </PDFDownloadLink>
  )
}
