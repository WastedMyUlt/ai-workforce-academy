'use client'

import { useEmailForm } from '../../hooks/useEmailForm';

interface EmailFormProps {
  source?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function EmailForm({ 
  source = 'hero',
  placeholder = 'Enter your email',
  buttonText = 'Get Started',
  className = '',
  onSuccess,
  onError
}: EmailFormProps) {
  const { 
    email, 
    setEmail, 
    state, 
    errorMessage, 
    handleSubmit, 
    isLoading, 
    isSuccess, 
    isError 
  } = useEmailForm({ source, onSuccess, onError });

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={isLoading || isSuccess}
            className={`
              w-full px-4 py-3 rounded-lg border text-base text-gray-900 placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:border-transparent shadow-sm
              transition-all duration-200
              ${isError ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-[var(--primary)]'}
              ${isSuccess ? 'border-green-300 bg-green-50' : ''}
              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading || isSuccess}
          className={`
            px-8 py-3 rounded-lg font-medium text-white transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
            ${isSuccess ? 'bg-green-500 hover:bg-green-600' : 'btn-primary'}
          `}
        >
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isLoading ? 'Subscribing...' : isSuccess ? 'Subscribed!' : buttonText}
        </button>
      </div>
      
      {/* Error Message */}
      {isError && errorMessage && (
        <div className="flex items-center text-red-600 text-sm">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errorMessage}
        </div>
      )}
      
      {/* Success Message */}
      {isSuccess && (
        <div className="flex items-center text-green-600 text-sm">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Thank you! Check your email for next steps.
        </div>
      )}
    </form>
  );
}
