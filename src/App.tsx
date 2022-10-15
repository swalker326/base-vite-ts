import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Box,
  Button,
  Code,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container textAlign={"center"} mt={14} maxW={"container.xl"}>
      <Flex justifyContent={"center"}>
        <Link href="https://vitejs.dev" target="_blank">
          <Image src="/vite.svg" alt="Vite logo" />
        </Link>
        <Link href="https://reactjs.org" target="_blank">
          <Image src={reactLogo} alt="React logo" />
        </Link>
      </Flex>
      <Heading textAlign={"center"} as={"h1"} fontWeight={"light"} size="4xl">
        Vite + React
      </Heading>
      <Box className="card">
        <Button
          bg={"blue.400"}
          color={"whiteAlpha.700"}
          variant={"solid"}
          onClick={() => setCount((count) => count + 1)}
        >
          Count: {count}
        </Button>
        <Text>
          Edit <Code colorScheme="blue">src/App.tsx</Code> and save to
          test HMR
        </Text>
      </Box>
      <Text as="sub" color="lightgray">
        Click on the Vite and React logos to learn more
      </Text>
    </Container>
  );
}

export default App;
