import { Stack, Box, Image, Text, Icon } from '@chakra-ui/react'
import React from 'react'

import peluche1 from '../../assets/peluche1.jpg'
import peluche2 from '../../assets/peluche2.png'
import peluche3 from '../../assets/peluche3.jpg'


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './SellerPosts.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <Box width="220px" height="326px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden'>
    <Image width="100%" src={peluche1} />

    <Box style={{"padding":"16px 12px 16px 16px","borderTop":"1px solid rgba(51,51,51,.1)"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Eevee 20 Cm Pokemon Pikachu</Text>
    </Box>
  </Box>,
  <Box  width="220px" height="326px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden'>
    <Image width="100%" src={peluche2} />

    <Box style={{"padding":"16px 12px 16px 16px","borderTop":"1px solid rgba(51,51,51,.1)"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Mew 20 Cm Pokemon Pikachu</Text>
    </Box>
  </Box>,
  <Box width="220px" height="326px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden'>
    <Image width="100%" src={peluche3} />

    <Box style={{"padding":"16px 12px 16px 16px","borderTop":"1px solid rgba(51,51,51,.1)"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Lapras 20 Cm Pokemon Pikachu</Text>
    </Box>
  </Box>,
  <Box width="220px" height="326px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden'>
    <Image width="100%" src={peluche1} />

    <Box style={{"padding":"16px 12px 16px 16px","borderTop":"1px solid rgba(51,51,51,.1)"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      {/* <Text color="#00a650" fontSize="14px" fontWeight="500" lineHeight="1em" marginBottom="9px">Envío gratis</Text> */}
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Lapras 20 Cm Pokemon Pikachu</Text>
    </Box>
  </Box>,
  <Box width="220px" height="326px" maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden'>
    <Image width="100%" src={peluche2} />

    <Box style={{"padding":"16px 12px 16px 16px","borderTop":"1px solid rgba(51,51,51,.1)"}}>
      <Text color="#333" fontSize="22px">$4.899</Text>
      {/* <Text color="#00a650" fontSize="14px" fontWeight="500" lineHeight="1em" marginBottom="9px">Envío gratis</Text> */}
      <Text color="rgba(0,0,0,.8)" fontSize="14px">Peluche Lapras 20 Cm Pokemon Pikachu</Text>
    </Box>
  </Box>,
];



export default function SellerPosts() {
  return (
    <Stack style={{"marginLeft":"50px", "maxWidth":"700px", "maxHeight":"350px","marginTop":"0"}}>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        disableDotsControls={true}
      />
    </Stack>
  )
}
