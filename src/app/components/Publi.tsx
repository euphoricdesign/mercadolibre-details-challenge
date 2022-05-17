import React from 'react'

import {
  Text,
  Stack, 
  StackDivider, 
  Button, 
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import publi from '../../assets/publi.jpg'

export default function Publi() {
  return (
    <Stack 
      style={{"border": "1px solid rgba(0,0,0,.1)", "padding": "16px 0px","marginTop":"0", "marginBottom":"16px"}}
      borderRadius="8px"
    >
      <Stack>
        <Text style={{"borderBottom":"1px solid rgba(0,0,0,.1)"}} paddingBottom="16px" paddingLeft="16px" color="rgba(0,0,0,.9)" fontSize="14px" fontWeight="600">¡Suscribite al nivel 6 con 67% OFF!</Text>
        <Stack padding="0 16px" style={{"borderBottom": "1px solid rgba(0,0,0,.1)"}}>
          <Image margin="24px 0" width="200px" src={publi} />
          <Text style={{"margin":"0"}} color="rgba(0,0,0,.9)" fontSize="16px">La oferta termina el 31 de mayo</Text>
          <Text style={{"margin":"4px 0 24px"}} color="rgba(0,0,0,.55)" fontSize="16px">Tu suscripción anual por $ 399/mes incluye Disney+, Star+, miles de descuentos en compras y ¡mucho más!</Text>
        </Stack>
        <Button 
          backgroundColor="rgba(65,137,230,.15)" 
          color="#3483fa"
          _hover={{
            background: "rgba(65,137,230,.2)",
            color: "#3483fa",
          }}
          size="sm"
          width="320px"
          alignSelf="center"
          style={{
            "marginTop":"16px"
          }}
        >
          Suscribite al nivel 6
        </Button>
      </Stack>
    </Stack>
  )
}
