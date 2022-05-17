import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Description() {
  return (
    <Stack style={{"marginLeft":"50px","marginTop":"40px","paddingBottom":"40px"}}>
      <Text fontSize="24px" paddingBottom="24px">Descripción</Text>
      <Text style={{"marginTop":"0"}} color="#666" fontSize="20px">
        PELUCHE STITCH
        <br />
        <br />
        MEDIDA 25 CM
        <br />
        <br />
        FOTOS REALES***
        <br />
        <br />
        <br />
        SE PUEDE RETIRAR POR:
        <br />
        AV. CORRIENTES Y URUGUAY (zona tribunales - Subte B ) - LOCAL
        <br />
        AV. CORRIENTES Y CARLOS PELLEGRINI (Subte B) - LOCAL
        <br />
        AV. CORRIENTES Y ALEM (Subte B) - LOCAL
        <br />
        VILLA PUEYRREDON
        <br />
        VILLA BALLESTER
        <br />
        <br />
        REALIZAMOS ENVÍOS A TODO EL PAÍS Y HACEMOS ENVÍOS A DOMICILIO POR MOTOMENSAJERÍA.
        <br />
        <br />
        **** NO SE OLVIDE DE VISITAR NUESTROS OTROS PRODUCTOS****
      </Text>
    </Stack>
  )
}
