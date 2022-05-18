import React, { useRef } from 'react'
import { Image, Stack } from '@chakra-ui/react'
import './SliderGallery.css'



export default function SliderGallery() {
  const mainImg = useRef(null)
  const handleEvent = (e = '') =>{
    mainImg.current.src = e.target.src
  }

  return (
    <Stack style={{"padding": "16px 0px", "marginLeft":"23px", "width":"720px"}}>
      <figure style={{
        "border":"2px solid #fff"
      }}>
        <Stack direction="row">
          <ul className='galleryList'>
            <li className='galleryItem'>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_978173-MLA32582347639_102019-O.jpg' />
            </li>
            <li className='galleryItem'>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_918230-MLA31424182281_072019-O.jpg' />
            </li>
            <li className='galleryItem'>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_616691-MLA27900381255_082018-O.jpg' />
            </li>
            <li className='galleryItem'>
              <Image padding="2px" display="block" width="100%" height="100%" objectFit="contain" onClick={handleEvent} src='http://http2.mlstatic.com/D_754004-MLA32299823528_092019-O.jpg' />
            </li>
          </ul>
          <Stack width="668px" style={{"marginTop":"24px", "padding":"16px"}}>
            <Image height={465} objectFit="contain" display="block" ref={mainImg} src='http://http2.mlstatic.com/D_978173-MLA32582347639_102019-O.jpg'/>
          </Stack>
        </Stack>
      </figure>
    </Stack>
  )
}
