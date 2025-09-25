'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      transition="transform 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      data-aos="fade-up"
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('brand.500', 'brand.400')}
          mb={4}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" mb={2}>{heading}</Heading>
          <Text color={'gray.600'} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'} mt={4}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function CallToAction() {
  return (
    <Box p={4} bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
        <Heading
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          fontWeight={'bold'}
          color={useColorModeValue('secondary.500', 'secondary.300')}
          data-aos="fade-up"
        >
          Ready to Build Your AI Workforce?
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'} data-aos="fade-up" data-aos-delay="100">
          Join the AI Workforce Academy today and start your journey toward business automation and growth.
        </Text>
      </Stack>

      <Box
        bg={useColorModeValue('accent.500', 'accent.400')}
        color={'white'}
        rounded={'xl'}
        p={8}
        maxW={'7xl'}
        mx={'auto'}
        boxShadow={'xl'}
        data-aos="fade-up"
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={'center'}
          justify={'space-between'}
        >
          <Stack spacing={2} textAlign={{ base: 'center', md: 'left' }} mb={{ base: 5, md: 0 }}>
            <Heading fontSize={{ base: 'xl', md: '2xl' }}>
              Get Early Access
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} opacity={0.8}>
              Join our waitlist for exclusive founding member benefits and pricing.
            </Text>
          </Stack>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
            <Button
              bg={'white'}
              color={'accent.500'}
              _hover={{
                bg: 'gray.100',
              }}
              size={'lg'}
              fontWeight={'bold'}
            >
              Join Waitlist
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              color={'white'}
              _hover={{
                bg: 'whiteAlpha.400',
              }}
              size={'lg'}
              fontWeight={'bold'}
            >
              Learn More
            </Button>
          </Stack>
        </Flex>
      </Box>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'AI Agent Library'}
            icon={<Icon as={LibraryIcon} w={10} h={10} />}
            description={'Access our growing library of pre-built AI agents ready to deploy in your business.'}
            href={'#'}
          />
          <Card
            heading={'Expert Training'}
            icon={<Icon as={TrainingIcon} w={10} h={10} />}
            description={'Learn from industry experts with our comprehensive AI agent training program.'}
            href={'#'}
          />
          <Card
            heading={'Community Support'}
            icon={<Icon as={CommunityIcon} w={10} h={10} />}
            description={'Join our community of AI implementers for support, collaboration, and growth.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}

// Simple icon components
const LibraryIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
);

const TrainingIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
  </svg>
);

const CommunityIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
  </svg>
);
