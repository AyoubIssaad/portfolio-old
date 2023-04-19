import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import thumbYouTube from "../public/images/links/youtube.png";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import { GridItem } from "../components/grid-item";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack, network and systems administrator based
          in Morocco! HEHE
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ayoub Issaad
            </Heading>
            <p>
              Aubiss (Network and Sysadmin / FullStack Developer / DevOoops &
              Security Enthusiast){" "}
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ayoub.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            In sollicitudin elit varius eros volutpat tincidunt. Proin venenatis
            odio eget molestie lacinia. Sed volutpat condimentum fermentum.
            Curabitur posuere porttitor velit eu mollis. {""}
            <NextLink href="/works/inkdrop">
              <Link>AUBISS</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1991</BioYear>
            Born in Safi, Morocco.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Completed The Stuf and Stuff.
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            iaculis massa ac lobortis suscipit. Praesent sollicitudin nulla in
            magna dignissim, vel aliquam arcu lobortis. Sed pharetra nisi ante.
            Proin lacinia urna sit amet dui consequat laoreet. Fusce nec sapien
            et nunc dignissim efficitur vel vel lectus. Donec ultrices auctor
            mauris.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music,{" "}
            <Link href="https://illust.odoruinu.net/" target="_blank">
              Drawing
            </Link>
            , Playing Drums,{" "}
            <Link href="https://500px.com/p/craftzdog" target="_blank">
              Photography
            </Link>
            , Leica, Machine Learning
          </Paragraph>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/AyoubIssaad" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @AyoubIssaad
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/AyoubIssaad" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @AyoubIssaad
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/AyoubIssaad" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @AyoubIssaad
                </Button>
              </Link>
            </ListItem>
          </List>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYouTube}
            >
              My YouTube channel
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
