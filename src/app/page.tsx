import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/ui/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
import {
	Container,
	Box,
	Heading,
	Text,
	SimpleGrid,
	Flex,
	Button,
	Image,
	Stack,
} from "@chakra-ui/react";
import { FaUserMd, FaFlask, FaPills, FaAmbulance } from "react-icons/fa";
import NextLink from "next/link";

export default function Home() {
	return (
		<MainLayout>
			<Hero />

			<Box bg="gray.50" py={16}>
				<Container maxW="container.xl">
					<Box textAlign="center" mb={12}>
						<Heading as="h2" size="xl" mb={4}>
							Our Services
						</Heading>
						<Text color="gray.600" maxW="2xl" mx="auto">
							Health Bridge offers a comprehensive range of healthcare services
							to meet all your medical needs in one place.
						</Text>
					</Box>

					<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
						<ServiceCard
							title="Doctor Appointments"
							description="Book appointments with specialists"
							features={[
								"Find doctors by specialty",
								"Video consultations available",
								"Instant appointment confirmation",
								"Appointment reminders",
							]}
							icon={<FaUserMd />}
							href="/book-doctor"
							buttonText="Book Now"
						/>

						<ServiceCard
							title="Diagnostics"
							description="Book lab tests and imaging services"
							features={[
								"MRI, CT Scan, Ultrasound",
								"Blood tests and lab work",
								"Home sample collection",
								"Digital reports",
							]}
							icon={<FaFlask />}
							href="/diagnostics"
							buttonText="Book Test"
							variant="secondary"
						/>

						<ServiceCard
							title="e-Pharmacy"
							description="Order medicines online"
							features={[
								"Prescription and OTC medicines",
								"Upload prescription",
								"Doorstep delivery",
								"Subscription for regular medicines",
							]}
							icon={<FaPills />}
							href="/pharmacy"
							buttonText="Order Now"
							variant="accent"
						/>

						<ServiceCard
							title="Emergency Services"
							description="24/7 emergency assistance"
							features={[
								"Ambulance booking",
								"Emergency doctor consultation",
								"Hospital admission assistance",
								"Medical emergency guidance",
							]}
							icon={<FaAmbulance />}
							href="/emergency"
							buttonText="Call Now"
							variant="outline"
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
						<Box flex="1" pr={{ lg: 8 }}>
							<Heading as="h2" size="xl" mb={4}>
								Why Choose Health Bridge?
							</Heading>
							<Text color="gray.600" mb={6}>
								We&apos;re committed to providing accessible, high-quality
								healthcare services that put patients first. Our platform
								connects you with the best healthcare providers and services.
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
											Trusted Healthcare Providers
										</Heading>
										<Text color="gray.600">
											All doctors and healthcare services are verified and
											credentialed.
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
											Seamless Digital Experience
										</Heading>
										<Text color="gray.600">
											Book appointments, access reports, and manage
											prescriptions online.
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
											Comprehensive Healthcare
										</Heading>
										<Text color="gray.600">
											From consultations to diagnostics and medicine delivery -
											all in one place.
										</Text>
									</Box>
								</Flex>
							</Stack>

							<Button
								as={NextLink}
								href="/about"
								size="lg"
								colorScheme="brand"
								variant="outline"
							>
								Learn More About Us
							</Button>
						</Box>

						<Box
							flex="1"
							maxW={{ base: "100%", lg: "500px" }}
							h={{ base: "300px", lg: "400px" }}
							position="relative"
							borderRadius="xl"
							overflow="hidden"
							boxShadow="xl"
						>
							<Image
								src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
								alt="Doctor with patient"
								objectFit="cover"
								w="100%"
								h="100%"
							/>
						</Box>
					</Flex>
				</Container>
			</Box>

			<Box bg="brand.500" py={16} color="white">
				<Container maxW="container.xl" textAlign="center">
					<Heading as="h2" size="xl" mb={6}>
						Ready to take control of your health?
					</Heading>
					<Text fontSize="lg" maxW="2xl" mx="auto" mb={8}>
						Join thousands of patients who have simplified their healthcare
						journey with Health Bridge.
					</Text>
					<Flex justify="center" gap={4} flexWrap="wrap">
						<Button
							as={NextLink}
							href="/register"
							size="lg"
							bg="white"
							color="brand.500"
							_hover={{ bg: "gray.100" }}
						>
							Sign Up Now
						</Button>
						<Button
							as={NextLink}
							href="/book-doctor"
							size="lg"
							variant="outline"
							colorScheme="white"
						>
							Book Your First Appointment
						</Button>
					</Flex>
				</Container>
			</Box>
		</MainLayout>
	);
}
