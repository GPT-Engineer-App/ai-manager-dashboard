import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const sampleCallLogs = [
  {
    id: 1,
    recording: "https://example.com/recording1.mp3",
    transcript: "Hello, I need help with my property.",
    timestamp: "2023-10-01 10:00:00",
    length: "2:30",
  },
  {
    id: 2,
    recording: "https://example.com/recording2.mp3",
    transcript: "Can you provide more details about the lease?",
    timestamp: "2023-10-02 14:15:00",
    length: "3:45",
  },
  {
    id: 3,
    recording: "https://example.com/recording3.mp3",
    transcript: "I have a maintenance request.",
    timestamp: "2023-10-03 09:30:00",
    length: "1:20",
  },
];

const CallLogs = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Call Logs</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Recording</Th>
            <Th>Transcript</Th>
            <Th>Timestamp</Th>
            <Th>Length</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sampleCallLogs.map((log) => (
            <Tr key={log.id}>
              <Td>
                <Button as="a" href={log.recording} target="_blank" colorScheme="blue">
                  Play
                </Button>
              </Td>
              <Td>{log.transcript}</Td>
              <Td>{log.timestamp}</Td>
              <Td>{log.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CallLogs;