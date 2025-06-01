"use client";

import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	SimpleGrid,
	Stack,
	Text,
	Image,
	Badge,
	useColorModeValue,
	Icon,
	Divider,
} from "@chakra-ui/react";
// import { SearchIcon, UploadIcon } from "@chakra-ui/icons";
import { useState } from "react";
import NextLink from "next/link";
import {
	FaPrescriptionBottleAlt,
	FaTablets,
	FaSyringe,
	FaFirstAid,
} from "react-icons/fa";

interface MedicineCardProps {
	id: string;
	name: string;
	image: string;
	price: number;
	originalPrice?: number;
	category: string;
	prescription: boolean;
}

const MedicineCard = ({
	id,
	name,
	image,
	price,
	originalPrice,
	category,
	prescription,
}: MedicineCardProps) => {
	return (
		<Box
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			bg={useColorModeValue("white", "gray.800")}
			transition="transform 0.3s ease"
			_hover={{
				transform: "translateY(-5px)",
				boxShadow: "lg",
			}}
		>
			<Box position="relative">
				<Image
					src={image}
					alt={name}
					height="200px"
					width="100%"
					objectFit="cover"
				/>
				{prescription && (
					<Badge
						position="absolute"
						top="10px"
						right="10px"
						px="2"
						py="1"
						bg="red.500"
						color="white"
						fontWeight="bold"
						fontSize="xs"
						borderRadius="md"
					>
						Prescription Required
					</Badge>
				)}
			</Box>

			<Box p="6">
				<Box display="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" colorScheme="brand">
						{category}
					</Badge>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					noOfLines={2}
					height="50px"
				>
					{name}
				</Box>

				<Box display="flex" mt="2" alignItems="center">
					<Box as="span" color="gray.600" fontSize="sm" mr={2}>
						{originalPrice && (
							<Text as="span" textDecoration="line-through">
								${originalPrice.toFixed(2)}
							</Text>
						)}
					</Box>
					<Box as="span" color="brand.500" fontSize="lg" fontWeight="bold">
						${price.toFixed(2)}
					</Box>
					{originalPrice && (
						<Badge ml="1" colorScheme="green">
							{Math.round(((originalPrice - price) / originalPrice) * 100)}% off
						</Badge>
					)}
				</Box>

				<Button
					as={NextLink}
					href={`/pharmacy/product/${id}`}
					mt="4"
					width="full"
					colorScheme="brand"
					size="sm"
				>
					View Details
				</Button>
			</Box>
		</Box>
	);
};

const SAMPLE_MEDICINES: MedicineCardProps[] = [
	{
		id: "1",
		name: "Paracetamol 500mg Tablets",
		image:
			"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80",
		price: 5.99,
		originalPrice: 7.99,
		category: "Pain Relief",
		prescription: false,
	},
	{
		id: "2",
		name: "Amoxicillin 500mg Capsules",
		image:
			"https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80",
		price: 12.5,
		category: "Antibiotics",
		prescription: true,
	},
	{
		id: "3",
		name: "Vitamin D3 1000IU Supplements",
		image:
			"https://images.unsplash.com/photo-1550572017-edd951b55104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80",
		price: 8.99,
		originalPrice: 10.99,
		category: "Vitamins",
		prescription: false,
	},
	{
		id: "4",
		name: "Blood Pressure Monitor",
		image:
			"https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80",
		price: 45.99,
		originalPrice: 59.99,
		category: "Medical Devices",
		prescription: false,
	},
];

export default function PharmacySearch() {
	const [searchQuery, setSearchQuery] = useState("");
	const [medicines, setMedicines] =
		useState<MedicineCardProps[]>(SAMPLE_MEDICINES);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real app, this would filter from an API
		const filtered = SAMPLE_MEDICINES.filter((medicine) =>
			medicine.name.toLowerCase().includes(searchQuery.toLowerCase()),
		);
		setMedicines(filtered);
	};

	return (
		<Container maxW="container.xl" py={8}>
			<Stack spacing={8}>
				<Box textAlign="center">
					<Heading as="h1" size="xl" mb={2}>
						Online Pharmacy
					</Heading>
					<Text color="gray.600">
						Order medicines online with doorstep delivery
					</Text>
				</Box>

				<Flex
					direction={{ base: "column", md: "row" }}
					gap={4}
					justify="center"
					align="center"
				>
					<Box
						as="form"
						onSubmit={handleSearch}
						width={{ base: "100%", md: "60%" }}
					>
						<InputGroup size="lg">
							<InputLeftElement pointerEvents="none">
								{/* <SearchIcon color="gray.300" /> */}
							</InputLeftElement>
							<Input
								type="text"
								placeholder="Search for medicines, health products and more"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								borderRadius="full"
								bg={useColorModeValue("white", "gray.700")}
							/>
							<Button
								ml={2}
								px={6}
								colorScheme="brand"
								borderRadius="full"
								type="submit"
							>
								Search
							</Button>
						</InputGroup>
					</Box>

					<Button
						// leftIcon={<UploadIcon />}
						colorScheme="secondary"
						variant="solid"
						size={{ base: "md", md: "lg" }}
						as={NextLink}
						href="/pharmacy/upload-prescription"
					>
						Upload Prescription
					</Button>
				</Flex>

				<Box>
					<Heading as="h2" size="lg" mb={4}>
						Shop by Category
					</Heading>
					<SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
						<CategoryBox
							icon={FaTablets}
							title="Medicines"
							href="/pharmacy/category/medicines"
						/>
						<CategoryBox
							icon={FaFirstAid}
							title="Health Care"
							href="/pharmacy/category/healthcare"
						/>
						<CategoryBox
							icon={FaPrescriptionBottleAlt}
							title="Vitamins & Supplements"
							href="/pharmacy/category/vitamins"
						/>
						<CategoryBox
							icon={FaSyringe}
							title="Medical Devices"
							href="/pharmacy/category/devices"
						/>
					</SimpleGrid>
				</Box>

				<Divider my={6} />

				<Box>
					<Heading as="h2" size="lg" mb={4}>
						Popular Products
					</Heading>
					<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
						{medicines.map((medicine) => (
							<MedicineCard key={medicine.id} {...medicine} />
						))}
					</SimpleGrid>
				</Box>
			</Stack>
		</Container>
	);
}

interface CategoryBoxProps {
	icon: React.ElementType;
	title: string;
	href: string;
}

const CategoryBox = ({ icon, title, href }: CategoryBoxProps) => {
	return (
		<Box
			as={NextLink}
			href={href}
			p={5}
			shadow="md"
			borderWidth="1px"
			borderRadius="lg"
			textAlign="center"
			bg={useColorModeValue("white", "gray.800")}
			transition="transform 0.3s ease"
			_hover={{
				transform: "translateY(-5px)",
				boxShadow: "lg",
				textDecoration: "none",
			}}
		>
			<Icon as={icon} w={10} h={10} color="brand.500" mb={3} />
			<Text fontWeight="bold">{title}</Text>
		</Box>
	);
};
