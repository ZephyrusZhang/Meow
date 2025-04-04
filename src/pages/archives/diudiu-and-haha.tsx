import CatImage from '@/components/cat-image'
import CatVideo from '@/components/cat-video'
import Layout from '@/components/layouts/article'
import Meta from '@/components/meta'
import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import SectionHeading from '@/components/section-heading'
import SimpleBreadcrumb from '@/components/simple-breadcrumb'
import { Container, HStack, List, ListItem } from '@chakra-ui/react'
import React from 'react'

function DiudiuAndHaha() {
  return (
    <Layout title="丢丢和哈哈">
      <Container>
        <SimpleBreadcrumb>
          丢丢和哈哈
        </SimpleBreadcrumb>

        <CatImage src="/images/cats/diudiu-and-haha.jpg" alt="丢丢和哈哈" />

        <Section delay={0.1}>
          <SectionHeading>基本信息</SectionHeading>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>丢丢（左）  哈哈（右）</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>两个女孩子</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>丢丢比较乖，哈哈比较闹腾，不怎么听话。</span>
            </ListItem>
            <ListItem>
              <Meta>状态</Meta>
              <span>已送养</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <SectionHeading>起源</SectionHeading>
          <Paragraph>
            在送走花卷和发糕大概一周后，有同学在六号门快递柜目击到了这两只小猫。猫舍的同学过去观察了一段时间后，发现并没有猫妈来领走这两只小猫，怀疑这两只小猫已经和猫妈走丢，于是便抓走带回去暂养了起来。
          </Paragraph>
          <HStack>
            <CatImage src="/images/cats/diudiu-and-haha/diudiu-and-haha-0.jpg" alt="丢丢和哈哈" />
            <CatImage src="/images/cats/diudiu-and-haha/diudiu-and-haha-1.jpg" alt="丢丢和哈哈" />
          </HStack>
          <Paragraph>
            暂养了大概一个月后，丢丢和哈哈也陆续送养了出去。
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <SectionHeading>云吸猫</SectionHeading>
          <CatImage src="/images/cats/diudiu-and-haha/diudiu-and-haha-2.jpg" alt="丢丢和哈哈" />
          <CatImage src="/images/cats/diudiu-and-haha/diudiu-and-haha-3.jpg" alt="丢丢和哈哈" />
          <CatVideo src="/videos/diudiu-and-haha/diudiu-and-haha-0.mp4" />
          <CatVideo src="/videos/diudiu-and-haha/diudiu-and-haha-1.mp4" />
        </Section>
      </Container>
    </Layout>
  )
}

export default DiudiuAndHaha
