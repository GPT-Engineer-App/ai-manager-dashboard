import { Box, Heading, Textarea, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

const KnowledgeBase = () => {
  const [knowledge, setKnowledge] = useState("");

  const handleSave = () => {
    // Logic to save the knowledge base entry
    console.log("Knowledge base entry saved:", knowledge);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Knowledge Base</Heading>
      <VStack spacing={4}>
        <Textarea
          value={knowledge}
          onChange={(e) => setKnowledge(e.target.value)}
          placeholder="Enter the knowledge base entry here..."
          size="lg"
        />
        <Button colorScheme="blue" onClick={handleSave}>Save Entry</Button>
      </VStack>
    </Box>
  );
};

export default KnowledgeBase;