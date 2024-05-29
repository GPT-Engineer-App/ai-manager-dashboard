import { Box, Heading, Text } from "@chakra-ui/react";

const CallLogs = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Call Logs</Heading>
      <Text>Here you can view all the call logs.</Text>
      {/* Add call logs table or list here */}
    </Box>
  );
};

export default CallLogs;