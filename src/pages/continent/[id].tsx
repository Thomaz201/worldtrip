import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Flex, Heading } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ContinentDetails } from '../../components/ContinentDetails';

import { ContinentModel } from '../../types';

interface ContinentPageProps {
  continent: ContinentModel;
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
        <meta name="description" content={continent.about} />
        <meta name="image" content={continent.bannerImage} />
      </Head>

      <Flex direction="column" h="100vh" w="100%" maxW={1440} mx="auto">
        <Header isContinent />

        <Flex
          as="section"
          w="100%"
          h="500px"
          bgImage={`url('${continent.bannerImage}')`}
          justify="left"
          align="flex-end"
        >
          <Flex
            w="100%"
            h="500px"
            maxW={1160}
            mx="auto"
            justify="left"
            align="flex-end"
          >
            <Heading
              color="gray.50"
              fontWeight="semibold"
              fontSize="3rem"
              mb="4rem"
            >
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <ContinentDetails continent={continent} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const { data }: AxiosResponse = await api.get<ContinentModel[]>(
    `continents/${id}`,
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      continent: data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
