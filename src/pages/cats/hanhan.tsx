import React from 'react'
import Layout from "@/components/layouts/article"
import { Container, Heading, List, ListItem } from "@chakra-ui/react"
import SimpleBreadcrumb from "@/components/simple-breadcrumb"
import CatImage from "@/components/cat-image"
import Meta from "@/components/meta"
import Section from "@/components/section"
import Paragraph from "@/components/paragraph"

const Hanhan = () => {
  return (
    <Layout title='憨憨'>
      <Container>
        <SimpleBreadcrumb>
          憨憨
        </SimpleBreadcrumb>

        <CatImage src='/images/cats/hanhan.jpg' alt='憨憨'/>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            基本信息
          </Heading>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>姓名</Meta>
              <span>憨憨</span>
            </ListItem>
            <ListItem>
              <Meta>性别</Meta>
              <span>公公</span>
            </ListItem>
            <ListItem>
              <Meta>性格</Meta>
              <span>胆子比较小，比较怕人</span>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            基本信息
          </Heading>
          <Paragraph>
            憨憨最初于20年10月在校园内目击。由于他性格比较胆小，猫舍的同学花了很长时间才抓到他去绝育。绝育之后，憨憨依旧比较怕人。但是不知道从什么时候开始，憨憨开始和歪歪成双出现在八栋车棚里。然后他们俩基本上就形影不离了，干什么事情都在一起。
          </Paragraph>
          <CatImage src='/images/cats/hanhan/hanhan-and-waiwai-0.jpg' alt='憨憨和歪歪'/>
          <CatImage src='/images/cats/hanhan/hanhan-and-waiwai-1.jpg' alt='憨憨和歪歪'/>
          <CatImage src='/images/cats/hanhan/hanhan-and-waiwai-2.jpg' alt='憨憨和歪歪'/>
          <Paragraph>
            过了很长一段时间，憨憨才没有那么怕人，逐渐给撸了。但是没想到之后就发生意外了。
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            意外
          </Heading>
          <Paragraph>
            2022年1月9日晚同学们听到八栋楼下有狗叫声，我们赶到现场时憨憨肚子已被狗咬破躲到了树上。经过救援虽然将憨憨从树上救下他却跑走躲了起来，寻找多时无果。2022年1月10日，经同学多方搜寻最终在八栋地下车库一车底发现了已经去了的憨憨。憨憨之后葬在了八栋后山的山丘上。
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            云吸猫
          </Heading>
          <CatImage src='/images/cats/hanhan/hanhan-and-waiwai-3.jpg' alt='憨憨和歪歪'/>
          <CatImage src='/images/cats/hanhan/hanhan-and-waiwai-4.jpg' alt='憨憨和歪歪'/>
          <CatImage src='/images/cats/hanhan/hanhan-2.jpg' alt='憨憨和果啤' caption='憨憨和果啤（右）'/>
        </Section>
      </Container>
    </Layout>
  )
}

export default Hanhan