'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
      data-aos="fade-up"
      align={'center'}
      justify={'center'}
      rounded={'xl'}
      p={6}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      border="1px solid"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      transition="transform 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
    >
      <Box
        w={16}
        h={16}
        display="flex"
        alignItems="center"
        justifyContent="center"
        rounded={'full'}
        bg={useColorModeValue('brand.50', 'brand.900')}
        color={'brand.500'}
        mb={4}
      >
        {icon}
      </Box>
      <Text fontWeight={600} fontSize="lg" mb={2}>{title}</Text>
      <Text textAlign={'center'} color={useColorModeValue('gray.600', 'gray.400')}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box py={12} bg={useColorModeValue('white', 'gray.800')}>
      <Container maxW={'7xl'} py={10}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
          <Heading
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            fontWeight={'bold'}
            color={useColorModeValue('secondary.500', 'secondary.300')}
            data-aos="fade-up"
          >
            Build Your AI Workforce
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'} data-aos="fade-up" data-aos-delay="100">
            Create, deploy, and monetize AI agents that work 24/7 to automate your business processes.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={RobotIcon} w={10} h={10} />}
            title={'Ready-to-Use AI Agents'}
            text={'Access a library of pre-built AI agents for marketing, sales, operations, and customer support.'}
          />
          <Feature
            icon={<Icon as={CustomizeIcon} w={10} h={10} />}
            title={'No-Code Customization'}
            text={'Easily customize and deploy AI agents without any coding skills or technical expertise.'}
          />
          <Feature
            icon={<Icon as={AutomationIcon} w={10} h={10} />}
            text={'Automate repetitive tasks and processes, freeing up your time to focus on growth and strategy.'}
            title={'24/7 Automation'}
          />
          <Feature
            icon={<Icon as={ScaleIcon} w={10} h={10} />}
            title={'Scale Without Hiring'}
            text={'Grow your business capacity without the overhead and complexity of hiring employees.'}
          />
          <Feature
            icon={<Icon as={ImplementIcon} w={10} h={10} />}
            title={'Implementation Support'}
            text={'Get expert guidance and support to ensure successful implementation and results.'}
          />
          <Feature
            icon={<Icon as={RevenueIcon} w={10} h={10} />}
            title={'Revenue Opportunities'}
            text={'Create new revenue streams by offering AI agent services to clients and customers.'}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// Simple icon components
const RobotIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13A2.5 2.5 0 005 15.5 2.5 2.5 0 007.5 18a2.5 2.5 0 002.5-2.5A2.5 2.5 0 007.5 13m9 0a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5z" />
  </svg>
);

const CustomizeIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M21.7 18.6V17.6L22.8 16.8C22.9 16.7 23 16.6 22.9 16.5L21.9 14.8C21.9 14.7 21.7 14.7 21.6 14.7L20.4 15.2C20.1 15 19.8 14.8 19.5 14.7L19.3 13.4C19.3 13.3 19.2 13.2 19.1 13.2H17.1C16.9 13.2 16.8 13.3 16.8 13.4L16.6 14.7C16.3 14.9 16.1 15 15.8 15.2L14.6 14.7C14.5 14.7 14.4 14.7 14.3 14.8L13.3 16.5C13.3 16.6 13.3 16.7 13.4 16.8L14.5 17.6V18.6L13.4 19.4C13.3 19.5 13.2 19.6 13.3 19.7L14.3 21.4C14.4 21.5 14.5 21.5 14.6 21.5L15.8 21C16 21.2 16.3 21.4 16.6 21.5L16.8 22.8C16.9 22.9 17 23 17.1 23H19.1C19.2 23 19.3 22.9 19.3 22.8L19.5 21.5C19.8 21.3 20 21.2 20.3 21L21.5 21.4C21.6 21.4 21.7 21.4 21.8 21.3L22.8 19.6C22.9 19.5 22.9 19.4 22.8 19.3L21.7 18.6M18 19.5C17.2 19.5 16.5 18.8 16.5 18S17.2 16.5 18 16.5 19.5 17.2 19.5 18 18.8 19.5 18 19.5M12.4 11.1L11.6 10.3L12.4 9.5C12.7 9.3 12.7 9 12.5 8.7L11.3 7.4C11 7.2 10.7 7.2 10.5 7.4L9.7 8.2L8.9 7.4L9.7 6.6C10 6.3 9.9 6 9.7 5.8L8.4 4.6C8.2 4.3 7.9 4.3 7.6 4.6L6.8 5.4L6 4.6L6.8 3.8C7.1 3.5 7 3.2 6.8 3L5.5 1.8C5.3 1.5 5 1.5 4.7 1.8L3.9 2.6L3.1 1.8C2.9 1.6 2.7 1.6 2.4 1.8L1.2 3.1C1 3.3 1 3.6 1.2 3.8L2 4.6L1.2 5.4C0.9 5.6 0.9 5.9 1.2 6.2L2.4 7.4C2.6 7.7 2.9 7.7 3.2 7.4L4 6.6L4.8 7.4L4 8.2C3.7 8.5 3.8 8.8 4 9L5.3 10.2C5.5 10.5 5.8 10.5 6.1 10.2L6.9 9.4L7.7 10.2L6.9 11C6.6 11.3 6.7 11.6 6.9 11.8L8.2 13C8.4 13.3 8.7 13.3 9 13L9.8 12.2L10.6 13C10.8 13.2 11.1 13.2 11.4 13L12.6 11.7C12.7 11.5 12.7 11.3 12.4 11.1M7.4 8.6C6 7.2 6 5 7.4 3.6S11 2.2 12.4 3.6 13.8 7.2 12.4 8.6C11 10 8.8 10 7.4 8.6Z" />
  </svg>
);

const AutomationIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z" />
  </svg>
);

const ScaleIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M22,17H18V10H22M22,7H18V2H22M6,2V7H2V2H6M6,17H2V10H6M18,2H10V7H18M18,17H10V10H18M6,2H10V7H6M6,17H10V10H6Z" />
  </svg>
);

const ImplementIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
  </svg>
);

const RevenueIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z" />
  </svg>
);
