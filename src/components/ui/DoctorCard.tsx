"use client";

import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	Badge,
	useColorModeValue,
	Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface DoctorCardProps {
	id: string;
	name: string;
	image: string;
	specialty: string;
	hospital: string;
	experience: number;
	rating: number;
	availability: string[];
}

export default function DoctorCard({
	id,
	name,
	image,
	specialty,
	hospital,
	experience,
	rating,
	availability,
}: DoctorCardProps) {
	const badgeBg = useColorModeValue("gray.50", "gray.800");
	return (
		<Center py={6}>
			<Box
				maxW={"320px"}
				w={"full"}
				bg={badgeBg}
				boxShadow={"lg"}
				rounded={"lg"}
				p={6}
				textAlign={"center"}
				transition="transform 0.3s ease"
				_hover={{
					transform: "translateY(-5px)",
					boxShadow: "xl",
				}}
			>
				<Avatar size={"xl"} src={image} mb={4} pos={"relative"} />
				<Heading fontSize={"2xl"} fontFamily={"body"}>
					Dr. {name}
				</Heading>
				<Text fontWeight={600} color={"brand.500"} mb={4}>
					{specialty}
				</Text>
				<Text textAlign={"center"} color={badgeBg} px={3} mb={4}>
					{hospital} • {experience} years experience
				</Text>

				<Flex justify="center" mt={2} mb={4}>
					{Array(5)
						.fill("")
						.map((_, i) => (
							<Box
								key={i}
								color={i < rating ? "yellow.400" : "gray.300"}
								fontSize="sm"
							>
								★
							</Box>
						))}
					<Text ml={2} fontSize="sm" color="gray.500">
						({rating.toFixed(1)})
					</Text>
				</Flex>

				<Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
					{availability.slice(0, 3).map((slot, index) => (
						<Badge
							key={index}
							px={2}
							py={1}
							bg={badgeBg}
							fontWeight={"400"}
							fontSize="xs"
						>
							{slot}
						</Badge>
					))}
				</Stack>

				<Stack mt={8} direction={"row"} spacing={4}>
					<Button
						flex={1}
						fontSize={"sm"}
						rounded={"full"}
						bg={"brand.500"}
						color={"white"}
						as={NextLink}
						href={`/book-doctor/${id}`}
						_hover={{
							bg: "brand.600",
						}}
						_focus={{
							bg: "brand.600",
						}}
					>
						Book Appointment
					</Button>
					<Button
						flex={1}
						fontSize={"sm"}
						rounded={"full"}
						bg={"gray.200"}
						color={"gray.800"}
						as={NextLink}
						href={`/doctors/${id}`}
						_hover={{
							bg: "gray.300",
						}}
					>
						View Profile
					</Button>
				</Stack>
			</Box>
		</Center>
	);
}
