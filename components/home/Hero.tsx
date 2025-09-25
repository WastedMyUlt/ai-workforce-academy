'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import LeadCaptureForm from '../shared/LeadCaptureForm';

export default function Hero() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={{ base: 20, md: 28 }}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                color={'secondary.500'}
              >
                Build Your AI Workforce
              </Text>
              <br />
              <Text as={'span'} color={'brand.500'}>
                Automate Without Hiring
              </Text>
            </Heading>
            <Text color={'gray.700'} fontSize={'xl'}>
              Transform your business with an AI workforce that works 24/7. Learn to build, 
              deploy, and monetize AI agents in 30 days - without coding skills.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'bold'}
                px={6}
                colorScheme={'brand'}
                bg={'brand.500'}
                _hover={{ bg: 'brand.600' }}
              >
                Get Started
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'bold'}
                px={6}
                leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                colorScheme={'secondary'}
                bg={'secondary.500'}
                _hover={{ bg: 'secondary.600' }}
              >
                How It Works
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
              bg={'gray.400'}
            >
              {/* Replace with your hero image */}
              <Text textAlign="center" py={20} color="white">
                Hero Image Placeholder
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

// Simple play icon component
const PlayIcon = (props: any) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
