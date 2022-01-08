import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { AxiosResponse } from 'axios';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelType } from '../components/TravelType';
import { Carousel } from '../components/Carousel';
import { ContinentCarouselModel } from '../types';
import { api } from '../services/api';

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
        <TravelType />
        <Carousel continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }: AxiosResponse = await api.get<ContinentCarouselModel[]>(
    '/continents',
  );

  return {
    props: {
      continents: data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
