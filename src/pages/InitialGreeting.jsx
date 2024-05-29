import { Box, Heading, Textarea, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

const InitialGreeting = () => {
  const [greeting, setGreeting] = useState("");

  const handleSave = () => {
    // Logic to save the greeting
    console.log("Greeting saved:", greeting);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Initial Greeting</Heading>
      <VStack spacing={4}>
        <Textarea
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          placeholder="Enter the initial greeting here..."
          size="lg"
        />
        <Button colorScheme="blue" onClick={handleSave}>Save Greeting</Button>
      </VStack>
    </Box>
  );
};

export default InitialGreeting;