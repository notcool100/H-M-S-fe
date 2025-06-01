"use client";

import {
	Box,
	Container,
	SimpleGrid,
	Stack,
	Text,
	Flex,
	useColorModeValue,
	Link,
	Button,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";

const Logo = () => {
	return (
		<Flex align="center">
			<Text
				fontFamily="heading"
				fontWeight="bold"
				color={useColorModeValue("brand.500", "white")}
				fontSize="xl"
			>
				Health Bridge
			</Text>
		</Flex>
	);
};

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
			mt="auto"
			borderTopWidth={1}
			borderStyle={"solid"}
			borderColor={useColorModeValue("gray.200", "gray.700")}
		>
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid
					templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
					spacing={8}
				>
					<Stack spacing={6}>
						<Box>
							<Logo />
						</Box>
						<Text fontSize={"sm"}>
							© {new Date().getFullYear()} Health Bridge. All rights reserved
						</Text>
						<Stack direction={"row"} spacing={6}>
							<Link href={"#"} aria-label="Facebook">
								<Box as="span" className="sr-only">
									Facebook
								</Box>
							</Link>
							<Link href={"#"} aria-label="Twitter">
								<Box as="span" className="sr-only">
									Twitter
								</Box>
							</Link>
							<Link href={"#"} aria-label="Instagram">
								<Box as="span" className="sr-only">
									Instagram
								</Box>
							</Link>
						</Stack>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Company</ListHeader>
						<Link as={NextLink} href={"/about"}>
							About Us
						</Link>
						<Link as={NextLink} href={"/careers"}>
							Careers
						</Link>
						<Link as={NextLink} href={"/contact"}>
							Contact Us
						</Link>
						<Link as={NextLink} href={"/partners"}>
							Partners
						</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Support</ListHeader>
						<Link as={NextLink} href={"/help"}>
							Help Center
						</Link>
						<Link as={NextLink} href={"/terms"}>
							Terms of Service
						</Link>
						<Link as={NextLink} href={"/privacy"}>
							Privacy Policy
						</Link>
						<Link as={NextLink} href={"/faq"}>
							FAQ
						</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<ListHeader>Stay up to date</ListHeader>
						<Stack direction={"row"}>
							<InputGroup size="md">
								<Input
									placeholder={"Your email address"}
									bg={useColorModeValue("white", "gray.800")}
									border={1}
									borderColor={useColorModeValue("gray.200", "gray.700")}
									_focus={{
										borderColor: "brand.500",
									}}
									type={"email"}
								/>
								<InputRightElement width={"4.5rem"}>
									<Button
										h={"1.75rem"}
										size="sm"
										bg={"brand.500"}
										color={"white"}
										_hover={{
											bg: "brand.600",
										}}
									>
										Subscribe
									</Button>
								</InputRightElement>
							</InputGroup>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
