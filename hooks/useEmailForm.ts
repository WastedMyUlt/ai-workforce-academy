'use client'

import { useState } from 'react';
import { isValidEmail, submitEmail, delay } from '../lib/utils';

export type FormState = 'idle' | 'loading' | 'success' | 'error';

export interface UseEmailFormProps {
  source?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function useEmailForm({ source = 'hero', onSuccess, onError }: UseEmailFormProps = {}) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setErrorMessage('');
    
    // Validate email
    if (!email.trim()) {
      setErrorMessage('Email is required');
      setState('error');
      return;
    }
    
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setState('error');
      return;
    }

    // Set loading state
    setState('loading');
    
    try {
      // Add a small delay for better UX
      await delay(500);
      
      // Submit email
      const result = await submitEmail(email, source);
      
      if (result.success) {
        setState('success');
        setEmail(''); // Clear form
        onSuccess?.();
      } else {
        setState('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
        onError?.(result.error || 'Unknown error');
      }
    } catch (error) {
      setState('error');
      const errorMsg = error instanceof Error ? error.message : 'Network error. Please try again.';
      setErrorMessage(errorMsg);
      onError?.(errorMsg);
    }
  };

  const reset = () => {
    setState('idle');
    setErrorMessage('');
    setEmail('');
  };

  return {
    email,
    setEmail,
    state,
    errorMessage,
    handleSubmit,
    reset,
    isLoading: state === 'loading',
    isSuccess: state === 'success',
    isError: state === 'error',
  };
}
