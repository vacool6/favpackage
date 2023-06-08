import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TableComp = (props) => {
  const { data } = props;

  const deleteHandler = (name) => {
    const localStorageData = JSON.parse(localStorage.getItem("data"));
    const updatedData = localStorageData.filter((e) => e.favPackage !== name);
    localStorage.setItem("data", JSON.stringify(updatedData));
    window.location.reload();
  };

  return (
    <Box py={10} px={4}>
      <Flex justify={"space-between"} align="center">
        <Heading>List of favorite packages</Heading>
        <Link to="/data">
          <Button>Add Fav</Button>
        </Link>
      </Flex>
      <br />
      <br />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Favorite package table</TableCaption>
          <Thead>
            <Tr>
              <Th>Package name</Th>
              <Th>Description</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((e) => (
              <Tr>
                <Td>{e.favPackage}</Td>
                <Td>{e.feed}</Td>

                <Td>
                  <Button
                    ml={2}
                    bg={"red.500"}
                    color={"white"}
                    _hover={{ bg: "red.700" }}
                    onClick={() => deleteHandler(e.favPackage)}
                  >
                    delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComp;
