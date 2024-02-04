import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="LearnHub Community"
            color={'blue.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a
            href="https://www.youtube.com/channel/UCWjx5-37wgCn6G-G-fLxiAQ"
            target={'blank'}
          >
            <TiSocialYoutubeCircular />
          </a>
          <a
            href="https://www.instagram.com/abhishek_singh_shekhawat1179/"
            target={'blank'}
          >
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/Abhisinghs" target={'blank'}>
            <DiGithub />
          </a>
          <a
            href="https://linkedin.com/in/abhishek-singh-773b3a229/"
            target={'blank'}
          >
            <TiSocialLinkedin />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
