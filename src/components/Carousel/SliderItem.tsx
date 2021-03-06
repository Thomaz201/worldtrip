import Link from 'next/link';

import {
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ContinentCarouselModel } from '../../types';

interface SliderItemProps {
  continent: ContinentCarouselModel;
}

export const SliderItem: React.FC<SliderItemProps> = ({ continent }) => {
  return (
    <Flex
      h="450px"
      justify="center"
      align="center"
      bgImage={`url(${continent.callImage})`}
    >
      <Link href={`/continent/${continent.id}`} passHref>
        <ChakraLink color="transparent">
          <VStack spacing={4}>
            <Heading
              color="gray.50"
              _hover={{ color: 'yellow.500' }}
              fontSize="3rem"
              fontWeight="bold"
            >
              {continent.name}
            </Heading>

            <Text color="gray.100" fontSize="1.5rem" fontWeight="bold">
              {continent.call}
            </Text>
          </VStack>
        </ChakraLink>
      </Link>
    </Flex>
  );
};
