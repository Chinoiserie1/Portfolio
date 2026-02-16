'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { TechIcon, type TechIconName } from './TechIcons'

export interface TechItem {
  name: string
  icon?: TechIconName
}

export interface ProjectDetails {
  description?: string
  techStack?: TechItem[]
  role?: string
  status?: 'live' | 'archived' | 'development'
  github?: string
  features?: string[]
}

export interface Project {
  name: string
  description: string
  link: { href: string; label: string }
  logo: StaticImageData
  details?: ProjectDetails
}

interface ProjectCardProps {
  project: Project
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ExternalLinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

const statusConfig = {
  live: { color: 'bg-emerald-500', label: 'Live' },
  archived: { color: 'bg-zinc-400', label: 'Archived' },
  development: { color: 'bg-amber-500', label: 'In Development' },
}

function Dialog({
  project,
  isVisible,
  onClose,
}: {
  project: Project
  isVisible: boolean
  onClose: () => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isVisible, onClose])

  if (!mounted) return null

  const details = project.details

  return createPortal(
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out',
        isVisible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <div
        onClick={onClose}
        className={clsx(
          'fixed inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity duration-300 ease-out dark:bg-black/40',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div
        className={clsx(
          'relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-zinc-900/5 transition-all duration-300 ease-out dark:bg-zinc-900 dark:ring-white/10',
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          aria-label="Close dialog"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              src={project.logo}
              alt=""
              className="h-10 w-10 object-contain"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {project.name}
              </h3>
              {details?.status && (
                <span className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  <span
                    className={clsx(
                      'h-1.5 w-1.5 rounded-full',
                      statusConfig[details.status].color
                    )}
                  />
                  {statusConfig[details.status].label}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {project.link.label}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {details?.description && (
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {details.description}
            </p>
          )}

          {details?.role && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Role
              </span>
              <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {details.role}
              </p>
            </div>
          )}

          {details?.features && details.features.length > 0 && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Key Features
              </span>
              <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {details.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details?.techStack && details.techStack.length > 0 && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Tech Stack
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {details.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech.icon && (
                      <TechIcon name={tech.icon} className="h-4 w-4" />
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            Visit Project
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
          {details?.github && (
            <a
              href={details.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              <GitHubIcon className="h-4 w-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDialog, setShowDialog] = useState(false)

  const hasDetails =
    project.details &&
    (project.details.description ||
      (project.details.techStack && project.details.techStack.length > 0) ||
      project.details.role ||
      project.details.status ||
      project.details.github ||
      (project.details.features && project.details.features.length > 0))

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    if (!hasDetails) return
    e.preventDefault()
    setShowDialog(true)
  }, [hasDetails])

  const handleClose = useCallback(() => {
    setShowDialog(false)
  }, [])

  useEffect(() => {
    if (showDialog) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showDialog])

  return (
    <>
      <li
        onClick={handleCardClick}
        className={clsx(
          'group relative flex flex-col items-start',
          hasDetails && 'cursor-pointer'
        )}
      >
        <div
          className={clsx(
            'absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50'
          )}
        />

        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-transform duration-300 group-hover:scale-110 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={project.logo}
            alt=""
            className="h-8 w-8 object-contain"
            unoptimized
          />
        </div>

        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          <span className="relative z-10">{project.name}</span>
        </h2>

        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <LinkIcon className="h-6 w-6 flex-none" />
          <span className="ml-2">{project.link.label}</span>
        </p>

        {hasDetails && (
          <span className="absolute bottom-0 right-0 z-10 rounded-full bg-teal-500/10 px-2 py-1 text-xs font-medium text-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-teal-400">
            Click for details
          </span>
        )}
      </li>

      {hasDetails && (
        <Dialog
          project={project}
          isVisible={showDialog}
          onClose={handleClose}
        />
      )}
    </>
  )
}
