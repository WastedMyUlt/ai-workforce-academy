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
  Flex,
  Circle,
  Image,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface StepProps {
  title: string;
  text: string;
  icon: ReactElement;
  number: number;
}

const Step = ({ title, text, icon, number }: StepProps) => {
  return (
    <Stack
      data-aos="fade-up"
      data-aos-delay={number * 100}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      p={6}
      boxShadow={'lg'}
      border="1px solid"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'secondary.500'}
        mb={{ base: 4, md: 0 }}
        mr={{ md: 4 }}
        flexShrink={0}
      >
        <Text fontWeight="bold" fontSize="xl">
          {number}
        </Text>
      </Flex>
      <Stack flex={1}>
        <Heading fontSize={'xl'} fontWeight={600}>
          {title}
        </Heading>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    </Stack>
  );
};

export default function HowItWorks() {
  return (
    <Box py={12} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={10}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
          <Heading
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            fontWeight={'bold'}
            color={useColorModeValue('secondary.500', 'secondary.300')}
            data-aos="fade-up"
          >
            How It Works
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'} data-aos="fade-up" data-aos-delay="100">
            Our simple 4-step process to transform your business with AI agents
          </Text>
        </Stack>

        <VStack spacing={8} align="stretch">
          <Step
            icon={<Icon as={LearnIcon} w={10} h={10} />}
            title={'Learn AI Agent Architecture'}
            text={'Master the fundamentals of AI agent design through our comprehensive training program, designed for non-technical professionals.'}
            number={1}
          />
          <Step
            icon={<Icon as={BuildIcon} w={10} h={10} />}
            title={'Build Your First Agents'}
            text={'Use our templates and step-by-step guides to build your first AI agents for your specific business needs.'}
            number={2}
          />
          <Step
            icon={<Icon as={DeployIcon} w={10} h={10} />}
            title={'Deploy Your AI Workforce'}
            text={'Launch your agents into production with our simplified deployment process, no coding or technical expertise required.'}
            number={3}
          />
          <Step
            icon={<Icon as={ScaleIcon} w={10} h={10} />}
            title={'Scale & Monetize'}
            text={'Expand your agent workforce and even create new revenue streams by offering AI agent services to clients.'}
            number={4}
          />
        </VStack>
      </Container>
    </Box>
  );
}

// Simple icon components
const LearnIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
  </svg>
);

const BuildIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M22,9V7H20V5A2,2 0 0,0 18,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H18A2,2 0 0,0 20,19V17H22V15H20V13H22V11H20V9H22M18,19H4V5H18V19M6,13H11V17H6V13M12,7H16V10H12V7M6,7H11V12H6V7M12,11H16V17H12V11Z" />
  </svg>
);

const DeployIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M2,2V4H7V8H2V10H7C8.1,10 9,9.1 9,8V4C9,2.9 8.1,2 7,2H2M7,12V14C7,15.1 7.9,16 9,16H11V18C11,19.1 11.9,20 13,20H17V22H22V20H19V16C19,14.9 18.1,14 17,14H13V12H17C18.1,12 19,11.1 19,10V8H22V6H17C15.9,6 15,6.9 15,8V10C15,11.1 15.9,12 17,12H7M13,16H17V18H13V16Z" />
  </svg>
);

const ScaleIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16,6L16.83,7.17L15.66,8.34L18.32,11L19.5,9.83L20.67,11L16.83,14.83L12.67,10.67L13.5,9.83L14.67,11L15.66,9.83L13,7.17L14.17,6L16,7.83L17.83,6M2,2V4H4V2H2M6,2V4H8V2H6M10,2V4H12V2H10M2,6V8H4V6H2M2,10V12H4V10H2M2,14V16H4V14H2M2,18V20H4V18H2M2,22V24H4V22H2M6,22V24H8V22H6M10,22V24H12V22H10M14,22V24H16V22H14M18,22V24H20V22H18M22,22V24H24V22H22M22,18V20H24V18H22M22,14V16H24V14H22Z" />
  </svg>
);
