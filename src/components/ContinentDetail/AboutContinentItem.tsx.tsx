import { ReactElement } from 'react';
import { Text, VStack } from '@chakra-ui/react';

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
      <Text fontSize="1.5rem">
        {label} {!!icon && icon}
      </Text>
    </VStack>
  );
};
