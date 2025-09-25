'use client'

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Logo = (props: any) => {
  return (
    <Text fontSize="lg" fontWeight="bold" color="secondary.500">
      AI Workforce Academy
    </Text>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={10}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} AI Workforce Academy. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              {/* Add social media icons here if needed */}
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>AI Agents</ListHeader>
            <Link href={'#'}>Content Creation</Link>
            <Link href={'#'}>Lead Research</Link>
            <Link href={'#'}>Client Outreach</Link>
            <Link href={'#'}>Customer Support</Link>
            <Link href={'#'}>Data Analysis</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Join Us</ListHeader>
            <Link href={'#'}>Get Started</Link>
            <Link href={'#'}>Sign In</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>
                <Tag size={'sm'} bg={'brand.500'} color={'white'} borderRadius="full">
                  New
                </Tag>
              </Link>
              <Text>AI SaaS Bootcamp</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
