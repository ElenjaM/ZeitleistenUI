import { Box as ChakraBox, Stack as ChakraStack, IconButton as ChakraIconButton, Button as ChakraButton, Tooltip as ChakraTooltip, Center as ChakraCenter, InputGroup as ChakraInputGroup, Input as ChakraInput, InputLeftElement as ChakraInputLeftElement } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { colours } from "./colours";

// ------------------------------------- App.tsx -------------------------------------------

export const AppBox = styled(ChakraBox)`
  background-color: ${colours.secondary};
  color: ${colours.seasalt};
  padding: 1%;
  width: 100%;
  height: 45%;
`;

export const AppStack = styled(ChakraStack)`
  spacing: 1%;
  direction: row;
  align: center;
  margin-left: 2.5%;
  width: 100%;
  height: 100%;
`;

export const AppBox2 = styled(ChakraBox)`
  width: 50%;
  margin-end: 4%;
  align-items: flex-end;
`;

export const AppCenter = styled(ChakraCenter)`
  width: 100%;
  height: 50%;
  background-color: ${colours.secondary};
  color: ${colours.seasalt};
  opacity: 50%;
  align-items: center;
  justify-content: flex-start;
`;


// ------------------------------------- FilterElement.tsx -------------------------------------------
export const FilterElementInputGroup = styled(ChakraInputGroup)`
  border-color: ${colours.secondary};
  width: 30%;
`;

export const FilterElementInput = styled(ChakraInput)`
  margin-left: 10%;
  border-color: ${colours.secondary};
  background-color: ${colours.secondary};
  color: ${colours.seasalt};
  variant: outline;
  width: 100%;
  padding-left: 13%;
`;

export const FilterElementInputLeftElement = styled(ChakraInputLeftElement)`
  pointer-events: none;
  margin-left: 12%;
`;

//-------------------------------------- MenuDrawer.tsx -----------------------------------------------

export const MenuInput = styled(ChakraInput)`
    border-width: '2px';
    color: ${colours.secondary};
`;

export const MenuButton = styled(ChakraButton)`
    width: '50%';
    background-color: ${colours.sand};
`;