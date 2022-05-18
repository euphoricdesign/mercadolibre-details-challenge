import React from 'react'

import {
  Text,
  Stack, 
  StackDivider, 
  Image,
  Link
} from "@chakra-ui/react";

import mercadocredito from '../../assets/mercadocredito.jpg'
import visa from '../../assets/visa.png'
import american from '../../assets/american.png'
import naranja from '../../assets/naranja.png'
import master from '../../assets/mastercard.jpg'
import visadebito from '../../assets/visadebito.png'
import maestro from '../../assets/maestro.jpg'
import masterdebito from '../../assets/masterdebito.png'
import pagofacil from '../../assets/pagofacil.jpg'
import rapipago from '../../assets/rapipago.png'

export default function InfoAndPubli() {
  return (
    <Stack 
      style={{"border": "1px solid rgba(0,0,0,.1)","marginTop":"0"}}
      borderRadius="8px"
      divider={<StackDivider style={{"margin":"0"}}/>}
    >
      <Stack style={{"padding": "32px 16px"}}>
        <Text fontSize="18px" marginBottom="28px">Devolución gratis</Text>
        <Text fontSize="14px" color="rgba(0,0,0,.55)" style={{"marginTop":"0"}}>Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!</Text>
        <Link style={{"marginTop":"24px"}} fontSize="14px" color="#3483fa">Conocer más sobre devoluciones</Link>
      </Stack>

      <Stack style={{"padding": "32px 16px"}}>
        <Text fontSize="18px" marginBottom="28px">Garantía</Text>
        <Text style={{"marginTop":"0","marginBottom":"12px"}} fontSize="16px" color="rgba(0,0,0,.9)">Compra Protegida con Mercado Pago</Text>
        <Text fontSize="14px" color="rgba(0,0,0,.55)" style={{"marginTop":"0", "marginBottom":"24px"}}>Recibí el producto que esperabas o te devolvemos tu dinero</Text>
        <Text style={{"marginTop":"0","marginBottom":"12px"}} fontSize="16px" color="rgba(0,0,0,.9)">Garantía del vendedor</Text>
        <Text fontSize="14px" color="rgba(0,0,0,.55)" style={{"marginTop":"0"}}>Sin garantía</Text>
        <Link style={{"marginTop":"24px"}} fontSize="14px" color="#3483fa">Conocer más sobre garantía</Link>
      </Stack>

      <Stack style={{"padding": "32px 16px"}}>
        <Text fontSize="18px" marginBottom="28px">Medios de pago</Text>
        <Text style={{"marginTop":"0","marginBottom":"12px"}} fontSize="16px" color="rgba(0,0,0,.9)">Hasta 12 cuotas sin tarjeta</Text>
        <Image width="75px" style={{"marginTop":"0"}} src={mercadocredito}/>
        <Text style={{"marginTop":"24px"}} fontSize="16px" color="rgba(0,0,0,.9)">Tarjetas de credito</Text>
        <Text fontSize="14px" color="rgba(0,0,0,.55)" style={{"marginTop":"0"}}>¡Cuotas sin interés con bancos seleccionados!</Text>

        <Stack direction="row" alignItems="center" spacing={6}>
          <Image width="40px" height="21px" src={visa}></Image>
          <Image width="30px" height="30px" src={american}></Image>
          <Image style={{"position":"relative", "top":"4px"}} width="60px" height="30px" src={naranja}></Image>
          <Image width="44px" height="40px" src={master}></Image>
        </Stack>

        <Text style={{"marginTop":"24px"}} fontSize="16px" color="rgba(0,0,0,.9)">Tarjetas de debito</Text>

        <Stack direction="row" alignItems="center" spacing={6}>
          <Image width="65px" height="22px" src={visadebito}></Image>
          <Image width="32px" height="30px" src={maestro}></Image>
          <Image position="relative" top="2px" width="60px" height="36px" src={masterdebito}></Image>
        </Stack>

        <Text style={{"marginTop":"24px"}} fontSize="16px" color="rgba(0,0,0,.9)">Efectivo</Text>

        <Stack direction="row" alignItems="center" spacing={5}>
          <Image width="36px" height="36px" src={pagofacil}></Image>
          <Image width="70px" height="23px" src={rapipago}></Image>
        </Stack>

        <Link style={{"marginTop":"24px"}} fontSize="14px" color="#3483fa">Conocer más sobre garantía</Link>
      </Stack>
    </Stack>
  )
}
