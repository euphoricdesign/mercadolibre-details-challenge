import React from 'react'

import {Stack, Button } from "@chakra-ui/react";

export default function Buttons() {
  return (
    <>
      <Stack style={{"marginTop": "24px", "marginBottom":"24px"}}>
        <Button 
          backgroundColor="#3483fa" 
          color="#fff"
          _hover={{
            background: "#2968c8",
            color: "#fff",
          }}
          size="lg"
        >
          Comprar ahora
        </Button>
        <Button 
          backgroundColor="rgba(65,137,230,.15)" 
          color="#3483fa"
          _hover={{
            background: "rgba(65,137,230,.2)",
            color: "#3483fa",
          }}
          size="lg"
        >
          Agregar al carrito
        </Button>
      </Stack>
    </>
  )
}
