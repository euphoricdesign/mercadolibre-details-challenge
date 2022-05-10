import React from 'react'

import {Text, Stack, Icon, Link} from "@chakra-ui/react";
import {BiCheckShield} from "react-icons/bi";

export default function ShortDescriptionLastText({link = "", text = "", icon = BiCheckShield}) {
  return (
    <>
      <Stack style={{"marginTop": "0px"}}>
        <Stack direction="row" spacing={2}>
          <Icon style={{"fontSize":"19px"}} color="rgba(0,0,0,.55)" as={icon} />
          <Text color="rgba(0,0,0,.55)" fontSize="sm">
            <Link>{link}</Link>
            {text}
          </Text>
        </Stack>
        <Stack></Stack>
      </Stack>
    </>
  )
}
