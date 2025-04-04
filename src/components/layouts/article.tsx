import type { ReactNode } from 'react'
import { GridItemStyle } from '@/components/grid-item'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

interface Props {
  children: ReactNode
  title?: string
}

function Layout({ children, title }: Props) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>
              {title}
              {' '}
              - Meow
            </title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
