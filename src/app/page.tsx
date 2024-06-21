import { Heading, VStack, Text, HStack, Link, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {

  return(
    <main>
      <VStack>
        <Heading as="h1">About: ksatoshi</Heading>
        <Box width={200} height={200}>
        <Image src="/profile.webp" alt="ナノブロックグラードンの画像" width={500} height={500} />
        </Box>
        
        <HStack>
          <HStack>
            <Box width={50} height={50}>
              <Image src="/github-mark.svg" alt="github logo" width={50} height={50}/>
            </Box>
            <Link href="https://github.com/ksatoshi">github</Link>
          </HStack>
          
          <HStack>
            <Box width={50} height={50}>
              <Image src="/zenn-logo-only.svg" alt="zenn logo" width={50} height={50}/>
            </Box>
            <Link href="https://zenn.dev/ksatoshi">zenn</Link>
          </HStack>
        </HStack>
      </VStack>
    </main>
  )
}
