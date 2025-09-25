'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  businessType: string;
};

export default function LeadCaptureForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        reset();
        toast({
          title: 'Success!',
          description: "You've been added to our waitlist.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: error instanceof Error ? error.message : 'Unable to submit your information.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="lg"
      p={8}
      boxShadow={'lg'}
      borderTop="4px solid"
      borderColor="brand.500"
      w={'full'}
    >
      {isSuccess ? (
        <Text color="brand.500" fontWeight="bold" fontSize="lg" textAlign="center">
          Thanks for joining! Check your email for next steps.
        </Text>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                borderColor="gray.300"
                _hover={{ borderColor: 'brand.400' }}
                focusBorderColor="brand.500"
                {...register('name', {
                  required: 'Name is required',
                })}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                borderColor="gray.300"
                _hover={{ borderColor: 'brand.400' }}
                focusBorderColor="brand.500"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
            </FormControl>
            <FormControl id="businessType">
              <FormLabel>Business Type</FormLabel>
              <Input
                type="text"
                borderColor="gray.300"
                _hover={{ borderColor: 'brand.400' }}
                focusBorderColor="brand.500"
                placeholder="e.g., Consultant, Agency, E-commerce"
                {...register('businessType')}
              />
            </FormControl>
            <Button
              bg="accent.500"
              color="white"
              _hover={{
                bg: 'accent.600',
              }}
              type="submit"
              isLoading={isSubmitting}
              loadingText="Submitting"
              size="lg"
              fontSize="md"
              w="full"
            >
              Join the Waitlist
            </Button>
            <Text fontSize="sm" color="gray.500" textAlign="center">
              We respect your privacy. Unsubscribe at any time.
            </Text>
          </Stack>
        </form>
      )}
    </Box>
  );
}
