import React from 'react'

import {Text, Stack, Icon, Link} from "@chakra-ui/react";
import {HiOutlineTruck} from "react-icons/hi";

export default function ShippingDetails({text1 = '', text2 = '', icon = HiOutlineTruck}) {
  return (
    <>
      <Stack direction="row">
        <Icon  marginTop={0.4} fontSize="23px" color="#00a650" as={icon} />
        <Stack color="#00a650" spacing={0.5}>
          <Text>{text1}</Text>
          <Link fontSize="15px" color="#3483fa">{text2}</Link>
        </Stack>
      </Stack>
    </>
  )
}
