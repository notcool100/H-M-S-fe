"use client";

import MainLayout from "@/components/layout/MainLayout";
import PharmacySearch from "@/components/features/PharmacySearch";
import {
	Box,
	Container,
	Heading,
	Text,
	SimpleGrid,
	Flex,
	Button,
	Image,
	Stack,
	Icon,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaShippingFast, FaLock, FaPercent, FaHeadset } from "react-icons/fa";
import NextLink from "next/link";

export default function Pharmacy() {
	return (
		<MainLayout>
			<Box bg="brand.500" py={12} color="white">
				<Container maxW="container.xl">
					<Heading as="h1" size="xl" mb={4}>
						Online Pharmacy
					</Heading>
					<Text fontSize="lg" maxW="2xl">
						Order prescription and over-the-counter medicines online with
						doorstep delivery.
					</Text>
				</Container>
			</Box>

			<PharmacySearch />

			<Box bg="gray.50" py={16}>
				<Container maxW="container.xl">
					<Heading as="h2" size="xl" mb={8} textAlign="center">
						Why Choose Our e-Pharmacy?
					</Heading>

					<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
						<FeatureBox
							icon={FaShippingFast}
							title="Fast Delivery"
							description="Get your medicines delivered within 24-48 hours of order confirmation."
						/>
						<FeatureBox
							icon={FaLock}
							title="Secure & Authentic"
							description="All medicines are sourced from licensed pharmacies and verified manufacturers."
						/>
						<FeatureBox
							icon={FaPercent}
							title="Best Prices"
							description="Enjoy discounts up to 20% compared to retail pharmacy prices."
						/>
						<FeatureBox
							icon={FaHeadset}
							title="24/7 Support"
							description="Our pharmacists are available round the clock to answer your queries."
						/>
					</SimpleGrid>
				</Container>
			</Box>

			<Box py={16}>
				<Container maxW="container.xl">
					<Flex
						direction={{ base: "column", lg: "row" }}
						align="center"
						justify="space-between"
						gap={8}
					>
						<Box
							flex="1"
							maxW={{ base: "100%", lg: "500px" }}
							h={{ base: "300px", lg: "400px" }}
							position="relative"
							borderRadius="xl"
							overflow="hidden"
							boxShadow="xl"
							order={{ base: 2, lg: 1 }}
						>
							<Image
								src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
								alt="Prescription upload"
								objectFit="cover"
								w="100%"
								h="100%"
							/>
						</Box>

						<Box flex="1" pl={{ lg: 8 }} order={{ base: 1, lg: 2 }}>
							<Heading as="h2" size="xl" mb={4}>
								Upload Your Prescription
							</Heading>
							<Text color="gray.600" mb={6}>
								Simply upload a photo of your prescription, and our pharmacists
								will verify and process your order. We&apos;ll contact you if we
								need any clarification.
							</Text>

							<Stack spacing={4} mb={6}>
								<Flex align="center">
									<Box
										bg="brand.50"
										p={2}
										borderRadius="full"
										mr={4}
										color="brand.500"
									>
										<Box as="span" fontWeight="bold">
											01
										</Box>
									</Box>
									<Box>
										<Heading as="h3" size="md">
											Upload Prescription
										</Heading>
										<Text color="gray.600">
											Take a clear photo or scan of your prescription.
										</Text>
									</Box>
								</Flex>

								<Flex align="center">
									<Box
										bg="brand.50"
										p={2}
										borderRadius="full"
										mr={4}
										color="brand.500"
									>
										<Box as="span" fontWeight="bold">
											02
										</Box>
									</Box>
									<Box>
										<Heading as="h3" size="md">
											Verification
										</Heading>
										<Text color="gray.600">
											Our pharmacists verify the prescription and prepare your
											order.
										</Text>
									</Box>
								</Flex>

								<Flex align="center">
									<Box
										bg="brand.50"
										p={2}
										borderRadius="full"
										mr={4}
										color="brand.500"
									>
										<Box as="span" fontWeight="bold">
											03
										</Box>
									</Box>
									<Box>
										<Heading as="h3" size="md">
											Delivery
										</Heading>
										<Text color="gray.600">
											Receive your medicines at your doorstep in discreet
											packaging.
										</Text>
									</Box>
								</Flex>
							</Stack>

							<Button
								as={NextLink}
								href="/pharmacy/upload-prescription"
								size="lg"
								colorScheme="brand"
							>
								Upload Prescription Now
							</Button>
						</Box>
					</Flex>
				</Container>
			</Box>

			<Box bg="accent.500" py={16} color="white">
				<Container maxW="container.xl" textAlign="center">
					<Heading as="h2" size="xl" mb={6}>
						Subscribe & Save
					</Heading>
					<Text fontSize="lg" maxW="2xl" mx="auto" mb={8}>
						Set up automatic refills for your regular medications and save up to
						15% on every order.
					</Text>
					<Button
						as={NextLink}
						href="/pharmacy/subscription"
						size="lg"
						bg="white"
						color="accent.500"
						_hover={{ bg: "gray.100" }}
					>
						Learn About Subscriptions
					</Button>
				</Container>
			</Box>
		</MainLayout>
	);
}

interface FeatureBoxProps {
	icon: React.ElementType;
	title: string;
	description: string;
}

const FeatureBox = ({ icon, title, description }: FeatureBoxProps) => {
	return (
		<Box
			bg={useColorModeValue("white", "gray.800")}
			p={6}
			borderRadius="lg"
			boxShadow="md"
			textAlign="center"
			transition="transform 0.3s ease"
			_hover={{
				transform: "translateY(-5px)",
				boxShadow: "lg",
			}}
		>
			<Flex
				w="70px"
				h="70px"
				borderRadius="full"
				bg="brand.50"
				color="brand.500"
				align="center"
				justify="center"
				mx="auto"
				mb={4}
			>
				<Icon as={icon} w={8} h={8} />
			</Flex>
			<Heading as="h3" size="md" mb={2}>
				{title}
			</Heading>
			<Text color="gray.600">{description}</Text>
		</Box>
	);
};
