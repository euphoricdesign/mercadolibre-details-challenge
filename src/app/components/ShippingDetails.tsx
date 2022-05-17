import React from 'react'

import {Text, Stack, Icon, Link} from "@chakra-ui/react";
import {HiOutlineTruck} from "react-icons/hi";

export default function ShippingDetails({text1 = '', text2 = '',text3 = '', icon = HiOutlineTruck}) {
  return (
    <>
      <Stack direction="row" style={{"marginTop":"12px"}}>
        <Icon  marginTop={0.4} fontSize="23px" color="#00a650" as={icon} />
        <Stack color="#00a650" spacing={0.5}>
          <Text>{text1}</Text>
          <Text color="rgba(0,0,0,.55)" fontSize="14px">{text3}</Text>
          <Link fontSize="14px" color="#3483fa">{text2}</Link>
        </Stack>
      </Stack>
    </>
  )
}
