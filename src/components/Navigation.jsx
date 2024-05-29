import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="brand.700" color="white" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">Property Management Dashboard</Text>
        <Flex alignItems="center">
          <NavLink to="/call-logs" style={{ marginRight: "20px" }}>
            <Link color="white">Call Logs</Link>
          </NavLink>
          <NavLink to="/initial-greeting" style={{ marginRight: "20px" }}>
            <Link color="white">Initial Greeting</Link>
          </NavLink>
          <NavLink to="/knowledge-base">
            <Link color="white">Knowledge Base</Link>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;