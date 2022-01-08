import { Icon } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const InfoIconWithTooltip: ForwardRefRenderFunction<HTMLSpanElement> = (
  { ...rest },
  ref,
) => {
  return (
    <span ref={ref} {...rest}>
      <Icon as={IoMdInformationCircleOutline} color="gray.400" />
    </span>
  );
};

export const InfoIcon = forwardRef(InfoIconWithTooltip);
