import React from 'react'
import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "@/components/section"
import { GridItem } from "@/components/grid-item"
import Layout from "@/components/layouts/article"

import thumbMakou from '../../../public/images/cats/makou.jpg'
import thumbWaiwai from '../../../public/images/cats/waiwai.jpg'

const Cats = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          猫猫档案
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem id='makou' title='麻酱' thumbnail={thumbMakou}/>
          </Section>
          <Section>
            <GridItem id='waiwai' title='歪歪' thumbnail={thumbWaiwai}/>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Cats