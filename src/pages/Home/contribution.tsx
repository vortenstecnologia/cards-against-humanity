import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

import { PixQRCode } from '@/components/pix-qrcode';

export function Contribution() {
  return (
    <Flex
      align="center"
      ml="-1"
      mb={{ base: '24', lg: '0' }}
      mt={{ base: '8', lg: '0' }}
      flexDir={{ base: 'column-reverse', lg: 'row' }}
    >

      <Box textAlign={{ base: 'center', lg: 'start' }}>
        <Heading as="h2" fontSize="xl">
          Bem-vindos Otários(as) ❤️
        </Heading>

        <Text color="gray.600" fontSize="small">
          Essa é uma versão exclusiva para membros da <Link href="https://vortens.com.br" fontWeight="bold" textDecor="underline">Vortens Tecnologia</Link>.{' '}
          <br /> Fork do projeto do nosso amigo {' '}
          <Link
            href="https://github.com/SilvanoGPM"
            fontWeight="bold"
            textDecor="underline"
          >
            Silvano Marques
          </Link>
        </Text>
        <br/>
        <img src="/logo.svg" width="60%"></img>
      </Box>
    </Flex>
  );
}
