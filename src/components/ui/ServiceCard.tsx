"use client";
import {
	Box,
	Center,
	Text,
	Stack,
	List,
	ListItem,
	ListIcon,
	Button,
	useColorModeValue,
	Icon,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import { ReactElement } from "react";
import NextLink from "next/link";

interface ServiceCardProps {
	title: string;
	description: string;
	features: string[];
	icon: ReactElement;
	href: string;
	buttonText: string;
	variant?: "outline" | "solid" | "accent" | "secondary";
}

export default function ServiceCard({
	title,
	description,
	features,
	icon,
	href,
	buttonText,
	variant = "solid",
}: ServiceCardProps) {
	return (
		<Center py={6}>
			<Box
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"lg"}
				rounded={"md"}
				overflow={"hidden"}
				transition="transform 0.3s ease"
				_hover={{
					transform: "translateY(-5px)",
					boxShadow: "xl",
				}}
			>
				<Stack
					textAlign={"center"}
					p={6}
					color={useColorModeValue("gray.800", "white")}
					align={"center"}
				>
					<Box
						w={"100px"}
						h={"100px"}
						bg={useColorModeValue("brand.50", "gray.700")}
						rounded={"full"}
						display="flex"
						alignItems="center"
						justifyContent="center"
						mb={4}
					>
						<Icon
							as={icon.type as React.ElementType}
							w={10}
							h={10}
							color="brand.500"
						/>
					</Box>
					<Stack direction={"row"} align={"center"} justify={"center"}>
						<Text fontSize={"3xl"} fontWeight={800}>
							{title}
						</Text>
					</Stack>
					<Text color={"gray.500"}>{description}</Text>
				</Stack>

				<Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
					<List spacing={3}>
						{features.map((feature, index) => (
							<ListItem key={index}>
								<ListIcon as={CheckIcon} color="brand.500" />
								{feature}
							</ListItem>
						))}
					</List>

					<Button
						as={NextLink}
						href={href}
						mt={10}
						w={"full"}
						variant={variant}
						colorScheme={
							variant === "outline"
								? "brand"
								: variant === "accent"
									? "accent"
									: variant === "secondary"
										? "secondary"
										: "brand"
						}
					>
						{buttonText}
					</Button>
				</Box>
			</Box>
		</Center>
	);
}
