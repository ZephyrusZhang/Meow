import React from 'react'
import Layout from "@/components/layouts/article"
import { Container, List, ListItem } from "@chakra-ui/react"
import SimpleBreadcrumb from "@/components/simple-breadcrumb"
import CatImage from "@/components/cat-image"
import Meta from "@/components/meta"
import Section from "@/components/section"
import Paragraph from "@/components/paragraph"
import SectionHeading from "@/components/section-heading"
import CatVideo from "@/components/cat-video"

const Baobao = () => {
  return (
    <Layout title='包包'>
      <Container>
        <SimpleBreadcrumb>
          包包
        </SimpleBreadcrumb>

        <CatImage src='/images/cats/baobao.jpg' alt='包包'/>

        <Section delay={0.1}>
          <SectionHeading>基本信息</SectionHeading>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>包包</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>母</span>
            </ListItem>
            <ListItem>
              <Meta>特点</Meta>
              <span>三花猫，额头上有一处棕色斑点（天眼）。自带眼线</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>温顺（可以抱），不易抓人</span>
            </ListItem>
            <ListItem>
              <Meta>状态</Meta>
              <span>已绝育</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <SectionHeading>刷新地点</SectionHeading>
          <Paragraph>
            二期17栋，及二期宿舍区其余部分
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <SectionHeading>起源</SectionHeading>
          <Paragraph>
            最早发现于深大，当天便被带去绝育。放归后失踪了一段时间，然后出现并定居于南科大。由于其可撸可抱且轻易不伸爪子而广受好评。与歪歪关系不好。
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <SectionHeading>云吸猫</SectionHeading>
          <CatImage src='/images/cats/baobao/baobao-0.jpg' alt='包包'/>
          <CatImage src='/images/cats/baobao/baobao-1.jpg' alt='包包'/>
          <CatImage src='/images/cats/baobao/baobao-2.jpg' alt='包包'/>
          <CatImage src='/images/cats/baobao/baobao-3.jpg' alt='包包'/>
          <CatVideo src='/videos/baobao/baobao-0.mp4'/>
        </Section>
      </Container>
    </Layout>
  )
}

export default Baobao
