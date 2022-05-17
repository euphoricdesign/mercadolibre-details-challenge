import React from 'react'

import { 
  Stack, 
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'


export default function MainFeatures() {
  return (
    <Stack style={{"marginLeft":"50px","marginBottom":"40px"}}>
      <Text fontSize="24px" paddingBottom="32px" paddingTop="40px">Características principales</Text>
      <TableContainer border="1px solid #ededed" borderRadius="5px" style={{"margin":"0"}}>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td background="#ebebeb" color="rgba(0,0,0,.9)" fontWeight="600" fontSize="16px">Marca</Td>
              <Td background="#f5f5f5" width="73%">RUNNY MODA</Td>
            </Tr>
            <Tr>
              <Td background="#f5f5f5" color="rgba(0,0,0,.9)" fontWeight="600" fontSize="16px">Modelo</Td>
              <Td width="73%">STITCH</Td>
            </Tr>
            <Tr>
              <Td background="#ebebeb" color="rgba(0,0,0,.9)" fontWeight="600" fontSize="16px">Franquicia</Td>
              <Td background="#f5f5f5" width="73%">RUNNY MODA</Td>
            </Tr>
            <Tr>
              <Td background="#f5f5f5" color="rgba(0,0,0,.9)" fontWeight="600" fontSize="16px">Animal</Td>
              <Td width="73%">STITCH</Td>
            </Tr>
            <Tr>
              <Td background="#ebebeb" color="rgba(0,0,0,.9)" fontWeight="600" fontSize="16px">Personaje</Td>
              <Td background="#f5f5f5" width="73%">Stitch</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Stack>
        <Text color="rgba(0,0,0,.9)" fontSize="20px" marginTop="32px" paddingBottom="24px">Otras características</Text>
        <Stack style={{"marginTop":"0"}} direction="row" spacing="200px">
          <Stack>
            <Text color="rgba(0,0,0,.9)" fontSize="14px"><span style={{"fontWeight":700, "fontSize": "14px", "color":"rgba(0,0,0,.9)"}}>Material</span>: Plush</Text>
            <Text color="rgba(0,0,0,.9)" fontSize="14px"><span style={{"fontWeight":700, "fontSize": "14px", "color":"rgba(0,0,0,.9)"}}>Es material hipoalergénico</span>: Sí</Text>
          </Stack>
          <Text color="rgba(0,0,0,.9)" fontSize="14px"><span style={{"fontWeight":700, "fontSize": "14px", "color":"rgba(0,0,0,.9)"}}>Altura x Ancho</span>: 25 cm x 1 cm</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
