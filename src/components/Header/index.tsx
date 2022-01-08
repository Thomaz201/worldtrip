import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import {
  Flex,
  Icon,
  IconButton,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/react';

interface HeaderProps {
  isContinent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isContinent = false }) => {
  return (
    <Flex as="header" h={20} w="100%" justify="center" align="center" py="1rem">
      {isContinent && (
        <Link href="/" passHref>
          <ChakraLink>
            <IconButton
              aria-label="Back to home"
              icon={<Icon mt="10px" as={IoIosArrowBack} />}
              fontSize="24"
              variant="unstyled"
              mr="2"
            />
          </ChakraLink>
        </Link>
      )}
      <Image src="/images/logo.svg" alt="worldtrip" />
    </Flex>
  );
};
