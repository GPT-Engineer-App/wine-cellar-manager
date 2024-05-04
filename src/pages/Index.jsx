import React, { useState } from "react";
import { Container, VStack, Heading, Button, Input, Table, Thead, Tbody, Tr, Th, Td, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [wines, setWines] = useState([]);
  const [newWine, setNewWine] = useState("");
  const toast = useToast();

  const handleAddWine = () => {
    if (newWine === "") {
      toast({
        title: "Erreur",
        description: "Le nom du vin ne peut pas être vide.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setWines([...wines, newWine]);
    setNewWine("");
    toast({
      title: "Succès",
      description: "Vin ajouté avec succès.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDeleteWine = (index) => {
    const newWines = wines.filter((_, i) => i !== index);
    setWines(newWines);
    toast({
      title: "Succès",
      description: "Vin supprimé avec succès.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading>Gestion de Cave à Vin</Heading>
        <Input placeholder="Ajouter un nouveau vin" value={newWine} onChange={(e) => setNewWine(e.target.value)} />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddWine}>
          Ajouter
        </Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nom du Vin</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {wines.map((wine, index) => (
              <Tr key={index}>
                <Td>{wine}</Td>
                <Td>
                  <IconButton aria-label="Edit wine" icon={<FaEdit />} mr={2} />
                  <IconButton aria-label="Delete wine" icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteWine(index)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
