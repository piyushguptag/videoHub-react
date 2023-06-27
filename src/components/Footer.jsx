import React from 'react'
import { Box, Stack,VStack, Heading ,HStack, Button, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={"full"} px={"4"}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Subscribe to our newletter
                </Heading>
                <HStack borderBottom={"2px solid white"} py={'2'}>
                    <Input placeholder='Enter Email here' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                     <AiOutlineSend />
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textAlign={'center'} textTransform={'uppercase'}>Video Hub</Heading>
                <Text>@All rights reserved</Text>
            </VStack>
            <VStack w={'full'}>
            <Heading size={'md'}  textTransform={'uppercase'}>Social Media</Heading>
            <Button variant={'link'} colorScheme='white'>
                <a target={'blank'} href="https://github.com/piyushguptag/">Github</a>
            </Button>
            <Button variant={'link'} colorScheme='white'>
                <a target={'blank'} href="https://www.linkedin.com/in/piyushgupta12/">LinkedIn</a>
            </Button>
            <Button variant={'link'} colorScheme='white'>
                <a target={'blank'} href="https://github.com/piyushguptag/">YouTube</a>
            </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer