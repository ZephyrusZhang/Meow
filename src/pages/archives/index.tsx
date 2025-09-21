import { GridItem } from '@/components/grid-item'
import Layout from '@/components/layouts/article'
import Section from '@/components/section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import thumbBaishoutao from '../../../public/images/cats/baishoutao.jpg'
import thumbBaobao from '../../../public/images/cats/baobao.jpg'
import thumbDiudiuAndHaha from '../../../public/images/cats/diudiu-and-haha.jpg'
import thumbHanhan from '../../../public/images/cats/hanhan.jpg'
import thumbHuajuanAndFagao from '../../../public/images/cats/huajuan-and-fagao.jpg'
import thumbLucky from '../../../public/images/cats/lucky.jpg'
import thumbLuojin from '../../../public/images/cats/luojin.jpg'
import thumbMakou from '../../../public/images/cats/makou.jpg'
import thumbWaiwai from '../../../public/images/cats/waiwai.jpg'
import thumbXcz from '../../../public/images/cats/xcz.jpg'
import thumbXiaohuabao from '../../../public/images/cats/xiaohuabao.jpg'
import thumbXuebao from '../../../public/images/cats/xuebao.jpg'

function Cats() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          猫猫档案
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem id="makou" title="麻酱" thumbnail={thumbMakou} />
          </Section>
          <Section>
            <GridItem id="xcz" title="欣常在" thumbnail={thumbXcz} />
          </Section>
          <Section>
            <GridItem id="xuebao" title="雪宝" thumbnail={thumbXuebao} />
          </Section>
          <Section>
            <GridItem id="luojin" title="罗晋" thumbnail={thumbLuojin} />
          </Section>
          <Section>
            <GridItem id="lucky" title="Lucky" thumbnail={thumbLucky} />
          </Section>
          <Section>
            <GridItem id="xiaohuabao" title="小花包" thumbnail={thumbXiaohuabao} />
          </Section>
          <Section>
            <GridItem id="baishoutao" title="白手套" thumbnail={thumbBaishoutao} />
          </Section>
          <Section>
            <GridItem id="waiwai" title="歪歪" thumbnail={thumbWaiwai} />
          </Section>
          <Section>
            <GridItem id="hanhan" title="憨憨*" thumbnail={thumbHanhan} />
          </Section>
          <Section>
            <GridItem id="baobao" title="包包" thumbnail={thumbBaobao} />
          </Section>
          <Section>
            <GridItem id="huajuan-and-fagao" title="花卷和发糕" thumbnail={thumbHuajuanAndFagao} />
          </Section>
          <Section>
            <GridItem id="diudiu-and-haha" title="丢丢和哈哈" thumbnail={thumbDiudiuAndHaha} />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Cats
