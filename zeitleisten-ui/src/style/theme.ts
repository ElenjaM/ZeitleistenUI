import { extendTheme } from '@chakra-ui/react';
import { colours } from './colours'; // Adjust the path to your colours file

const theme = extendTheme({
    colors: {
      ...colours,
    },
  });

  export default theme;