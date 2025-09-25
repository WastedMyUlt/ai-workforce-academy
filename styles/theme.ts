import { extendTheme } from '@chakra-ui/react';

// AI Workforce Academy Brand Colors
const colors = {
  brand: {
    50: '#E6F6FA',
    100: '#C0E9F5',
    200: '#99DCF0',
    300: '#66CAEB',
    400: '#33B9E6',
    500: '#00B8D4', // Electric Teal (primary)
    600: '#0093A8',
    700: '#006E7D',
    800: '#004A53',
    900: '#00252A',
  },
  secondary: {
    50: '#E3E9F6',
    100: '#B7C5E7',
    200: '#8BA1D8',
    300: '#5F7DC9',
    400: '#3359BA',
    500: '#0B3D91', // Deep Blue (secondary)
    600: '#093174',
    700: '#072557',
    800: '#04183A',
    900: '#020C1D',
  },
  accent: {
    50: '#FFF0EB',
    100: '#FFD6C8',
    200: '#FFBCA5',
    300: '#FFA382',
    400: '#FF895F',
    500: '#FF5722', // Vibrant Orange (accent)
    600: '#CC461B',
    700: '#993414',
    800: '#66230E',
    900: '#331107',
  },
  gray: {
    50: '#F5F7FA', // Light Gray (background)
    700: '#4A5568',
    800: '#2D3748', // Dark Gray (text)
    900: '#1A202C',
  }
};

const fonts = {
  heading: '"Montserrat", sans-serif',
  body: '"Inter", sans-serif',
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        primary: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        secondary: {
          bg: 'secondary.500',
          color: 'white',
          _hover: {
            bg: 'secondary.600',
          },
        },
        accent: {
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'accent.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
      },
    },
  },
});

export default theme;
