"use client";

import MainLayout from "@/components/layout/MainLayout";
import AppointmentForm from "@/components/forms/AppointmentForm";
import {
	Box,
	Container,
	Heading,
	Text,
	Flex,
	Avatar,
	Badge,
	Stack,
	HStack,
	Button,
	Divider,
	SimpleGrid,
	Card,
	CardBody,
	Icon,
	useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon, TimeIcon, CalendarIcon } from "@chakra-ui/icons";
import {
	FaGraduationCap,
	FaHospital,
	FaLanguage,
	FaUserMd,
} from "react-icons/fa";
import { useParams } from "next/navigation";

// Sample data for doctors
const DOCTORS = [
	{
		id: "1",
		name: "Sarah Johnson",
		image:
			"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		specialty: "Cardiologist",
		hospital: "Health Bridge Medical Center",
		experience: 12,
		rating: 4.8,
		availability: ["Today", "Tomorrow", "Fri, 16 Jun"],
		education: [
			"MD in Cardiology, Harvard Medical School",
			"Residency at Mayo Clinic",
			"Fellowship in Interventional Cardiology",
		],
		languages: ["English", "Spanish"],
		about:
			"Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in treating heart conditions. She specializes in preventive cardiology, heart failure management, and interventional procedures.",
	},
	{
		id: "2",
		name: "Michael Chen",
		image:
			"https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
		specialty: "Dermatologist",
		hospital: "City Skin Clinic",
		experience: 8,
		rating: 4.6,
		availability: ["Tomorrow", "Thu, 15 Jun", "Mon, 19 Jun"],
		education: [
			"MD in Dermatology, Stanford University",
			"Residency at University of California",
		],
		languages: ["English", "Mandarin"],
		about:
			"Dr. Michael Chen is a dermatologist specializing in medical and cosmetic dermatology. He has expertise in treating skin conditions like acne, eczema, psoriasis, and performing procedures like Botox and fillers.",
	},
];

export default function BookDoctorAppointment() {
	const params = useParams();
	const doctorId = params.id as string;

	// Find the doctor by ID
	const doctor = DOCTORS.find((doc) => doc.id === doctorId);
	const cardBg = useColorModeValue("white", "gray.800");
	if (!doctor) {
		return (
			<MainLayout>
				<Container maxW="container.xl" py={12}>
					<Heading>Doctor not found</Heading>
					<Text mt={4}>The doctor you are looking for does not exist.</Text>
					<Button mt={6} colorScheme="brand" as="a" href="/book-doctor">
						Back to Doctor List
					</Button>
				</Container>
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<Box bg="brand.500" py={8} color="white">
				<Container maxW="container.xl">
					<Heading as="h1" size="xl" mb={2}>
						Book an Appointment
					</Heading>
					<Text fontSize="lg">
						Schedule a consultation with Dr. {doctor.name}
					</Text>
				</Container>
			</Box>

			<Container maxW="container.xl" py={8}>
				<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
					<Box>
						<Card
							bg={cardBg}
							boxShadow="md"
							borderRadius="lg"
							overflow="hidden"
							mb={6}
						>
							<CardBody>
								<Flex
									direction={{ base: "column", sm: "row" }}
									align="center"
									gap={6}
								>
									<Avatar
										size="xl"
										src={doctor.image}
										name={`Dr. ${doctor.name}`}
									/>
									<Box>
										<Heading as="h2" size="lg">
											Dr. {doctor.name}
										</Heading>
										<Text color="brand.500" fontWeight="bold" mb={2}>
											{doctor.specialty}
										</Text>
										<HStack spacing={2} mb={2}>
											<Badge colorScheme="green">
												{doctor.experience} Years Experience
											</Badge>
											<HStack>
												<StarIcon color="yellow.400" />
												<Text>{doctor.rating} Rating</Text>
											</HStack>
										</HStack>
										<Flex align="center">
											<Icon as={FaHospital} mr={2} color="gray.500" />
											<Text color="gray.600">{doctor.hospital}</Text>
										</Flex>
									</Box>
								</Flex>
							</CardBody>
						</Card>

						<Card
							bg={cardBg}
							boxShadow="md"
							borderRadius="lg"
							overflow="hidden"
							mb={6}
						>
							<CardBody>
								<Heading as="h3" size="md" mb={4}>
									About Dr. {doctor.name}
								</Heading>
								<Text mb={4}>{doctor.about}</Text>

								<Divider my={4} />

								<Stack spacing={4}>
									<Flex align="flex-start">
										<Icon
											as={FaGraduationCap}
											mt={1}
											mr={3}
											color="brand.500"
										/>
										<Box>
											<Text fontWeight="bold" mb={1}>
												Education
											</Text>
											<Stack spacing={1}>
												{doctor.education.map((edu, index) => (
													<Text key={index} fontSize="sm">
														• {edu}
													</Text>
												))}
											</Stack>
										</Box>
									</Flex>

									<Flex align="center">
										<Icon as={FaLanguage} mr={3} color="brand.500" />
										<Box>
											<Text fontWeight="bold" mb={1}>
												Languages
											</Text>
											<HStack>
												{doctor.languages.map((lang, index) => (
													<Badge key={index} colorScheme="gray">
														{lang}
													</Badge>
												))}
											</HStack>
										</Box>
									</Flex>

									<Flex align="center">
										<Icon as={FaUserMd} mr={3} color="brand.500" />
										<Box>
											<Text fontWeight="bold" mb={1}>
												Specialty
											</Text>
											<Text>{doctor.specialty}</Text>
										</Box>
									</Flex>
								</Stack>
							</CardBody>
						</Card>

						<Card
							bg={cardBg}
							boxShadow="md"
							borderRadius="lg"
							overflow="hidden"
						>
							<CardBody>
								<Heading as="h3" size="md" mb={4}>
									Available Slots
								</Heading>
								<Stack spacing={4}>
									<Flex align="center">
										<Icon as={CalendarIcon} mr={3} color="brand.500" />
										<Text fontWeight="bold">Next Available:</Text>
										<Badge ml={2} colorScheme="green">
											{doctor.availability[0]}
										</Badge>
									</Flex>

									<Text fontWeight="bold">Upcoming Availability:</Text>
									<SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
										{doctor.availability.map((slot, index) => (
											<Box
												key={index}
												p={3}
												borderWidth="1px"
												borderRadius="md"
												textAlign="center"
												bg={index === 0 ? "brand.50" : "transparent"}
												borderColor={index === 0 ? "brand.500" : "gray.200"}
											>
												<Text fontWeight={index === 0 ? "bold" : "normal"}>
													{slot}
												</Text>
												<Text fontSize="sm" color="gray.500">
													Multiple slots
												</Text>
											</Box>
										))}
									</SimpleGrid>

									<Button
										leftIcon={<TimeIcon />}
										colorScheme="brand"
										variant="outline"
										size="sm"
										alignSelf="flex-start"
									>
										View Full Schedule
									</Button>
								</Stack>
							</CardBody>
						</Card>
					</Box>

					<Box>
						<AppointmentForm />
					</Box>
				</SimpleGrid>
			</Container>
		</MainLayout>
	);
}
