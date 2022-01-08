import { ReactElement } from 'react';
import { Flex, Text, VStack } from '@chakra-ui/react';

interface AboutContinentItemProps {
  number: number;
  label: string;
  icon?: ReactElement;
}

export const AboutContinentItem: React.FC<AboutContinentItemProps> = ({
  number,
  label,
  icon,
}) => {
  return (
    <VStack spacing={-2} fontWeight="semibold">
      <Text fontSize="3rem" color="yellow.500">
        {number}
      </Text>
      <Flex>
        <Text fontSize="1.5rem">{label}</Text>

        {!!icon && (
          <Text mt="4px" ml="3px" fontSize="1.3rem">
            {icon}
          </Text>
        )}
      </Flex>
    </VStack>
  );
};
