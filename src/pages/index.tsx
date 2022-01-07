import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { ContinentCarouselModel } from '../types';

interface HomeProps {
  continents: ContinentCarouselModel[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
        <meta
          name="description"
          content="5 Continentes, intinitas possibilidades"
        />
        <meta name="image" content="/images/americas/call.png" />
      </Head>

      <Flex direction="column" h="100vh" w="100%" maxW={1440} mx="auto">
        <Header />
        <Banner />
      </Flex>
    </>
  );
}
