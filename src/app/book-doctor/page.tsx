"use client";

import MainLayout from "@/components/layout/MainLayout";
import DoctorCard from "@/components/ui/DoctorCard";
import {
	Box,
	Container,
	Heading,
	Text,
	SimpleGrid,
	Flex,
	Input,
	Select,
	Button,
	InputGroup,
	InputLeftElement,
	Stack,
	Divider,
	Tag,
	TagLabel,
	TagCloseButton,
	HStack,
	useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
	},
	{
		id: "3",
		name: "Emily Rodriguez",
		image:
			"https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		specialty: "Pediatrician",
		hospital: "Children's Health Center",
		experience: 15,
		rating: 4.9,
		availability: ["Today", "Thu, 15 Jun", "Fri, 16 Jun"],
	},
	{
		id: "4",
		name: "David Kim",
		image:
			"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		specialty: "Orthopedic Surgeon",
		hospital: "Joint & Spine Institute",
		experience: 20,
		rating: 4.7,
		availability: ["Fri, 16 Jun", "Mon, 19 Jun", "Tue, 20 Jun"],
	},
	{
		id: "5",
		name: "Lisa Patel",
		image:
			"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		specialty: "Neurologist",
		hospital: "Brain & Nerve Center",
		experience: 14,
		rating: 4.5,
		availability: ["Today", "Tomorrow", "Wed, 21 Jun"],
	},
	{
		id: "6",
		name: "Robert Williams",
		image:
			"https://images.unsplash.com/photo-1637059824899-a441006a6875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
		specialty: "General Physician",
		hospital: "Community Health Clinic",
		experience: 10,
		rating: 4.4,
		availability: ["Tomorrow", "Thu, 15 Jun", "Fri, 16 Jun"],
	},
];

// Specialty options
const SPECIALTIES = [
	"All Specialties",
	"Cardiologist",
	"Dermatologist",
	"Pediatrician",
	"Orthopedic Surgeon",
	"Neurologist",
	"General Physician",
	"Gynecologist",
	"ENT Specialist",
	"Psychiatrist",
	"Dentist",
];

export default function BookDoctor() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
	const [filters, setFilters] = useState<string[]>([]);
	const [doctors, setDoctors] = useState(DOCTORS);

	const handleSearch = () => {
		let filtered = DOCTORS;

		// Filter by search query
		if (searchQuery) {
			filtered = filtered.filter(
				(doctor) =>
					doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}

		// Filter by specialty
		if (selectedSpecialty !== "All Specialties") {
			filtered = filtered.filter(
				(doctor) => doctor.specialty === selectedSpecialty,
			);
		}

		// Apply additional filters
		if (filters.length > 0) {
			if (filters.includes("Available Today")) {
				filtered = filtered.filter((doctor) =>
					doctor.availability.includes("Today"),
				);
			}
			if (filters.includes("Highly Rated")) {
				filtered = filtered.filter((doctor) => doctor.rating >= 4.5);
			}
			if (filters.includes("10+ Years Experience")) {
				filtered = filtered.filter((doctor) => doctor.experience >= 10);
			}
		}

		setDoctors(filtered);
	};

	const addFilter = (filter: string) => {
		if (!filters.includes(filter)) {
			setFilters([...filters, filter]);
		}
	};

	const removeFilter = (filter: string) => {
		setFilters(filters.filter((f) => f !== filter));
	};

	const clearFilters = () => {
		setSearchQuery("");
		setSelectedSpecialty("All Specialties");
		setFilters([]);
		setDoctors(DOCTORS);
	};

	return (
		<MainLayout>
			<Box bg="brand.500" py={12} color="white">
				<Container maxW="container.xl">
					<Heading as="h1" size="xl" mb={4}>
						Find & Book Doctor Appointments
					</Heading>
					<Text fontSize="lg" maxW="2xl">
						Search for specialists, read patient reviews, and book appointments
						online instantly.
					</Text>
				</Container>
			</Box>

			<Container maxW="container.xl" py={8}>
				<Box
					bg={useColorModeValue("white", "gray.800")}
					p={6}
					borderRadius="lg"
					boxShadow="md"
					mb={8}
				>
					<Stack spacing={4}>
						<Flex direction={{ base: "column", md: "row" }} gap={4} mb={4}>
							<InputGroup flex="2">
								<InputLeftElement pointerEvents="none">
									<SearchIcon color="gray.300" />
								</InputLeftElement>
								<Input
									placeholder="Search by doctor name or hospital"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</InputGroup>

							<Select
								flex="1"
								value={selectedSpecialty}
								onChange={(e) => setSelectedSpecialty(e.target.value)}
							>
								{SPECIALTIES.map((specialty) => (
									<option key={specialty} value={specialty}>
										{specialty}
									</option>
								))}
							</Select>

							<Button colorScheme="brand" px={8} onClick={handleSearch}>
								Search
							</Button>
						</Flex>

						<Divider />

						<Flex
							justify="space-between"
							align={{ base: "flex-start", md: "center" }}
							direction={{ base: "column", md: "row" }}
							gap={4}
						>
							<Text fontWeight="medium">Quick Filters:</Text>
							<HStack spacing={2} flexWrap="wrap">
								<Button
									size="sm"
									variant="outline"
									onClick={() => addFilter("Available Today")}
									isDisabled={filters.includes("Available Today")}
								>
									Available Today
								</Button>
								<Button
									size="sm"
									variant="outline"
									onClick={() => addFilter("Highly Rated")}
									isDisabled={filters.includes("Highly Rated")}
								>
									Highly Rated (4.5+)
								</Button>
								<Button
									size="sm"
									variant="outline"
									onClick={() => addFilter("10+ Years Experience")}
									isDisabled={filters.includes("10+ Years Experience")}
								>
									10+ Years Experience
								</Button>
							</HStack>
						</Flex>

						{filters.length > 0 && (
							<Flex align="center" mt={2}>
								<Text fontSize="sm" mr={2}>
									Active Filters:
								</Text>
								<HStack spacing={2}>
									{filters.map((filter) => (
										<Tag
											key={filter}
											size="md"
											borderRadius="full"
											variant="solid"
											colorScheme="brand"
										>
											<TagLabel>{filter}</TagLabel>
											<TagCloseButton onClick={() => removeFilter(filter)} />
										</Tag>
									))}
									<Button
										size="xs"
										variant="link"
										colorScheme="brand"
										onClick={clearFilters}
									>
										Clear All
									</Button>
								</HStack>
							</Flex>
						)}
					</Stack>
				</Box>

				{doctors.length === 0 ? (
					<Box textAlign="center" py={10}>
						<Heading as="h3" size="md" mb={4}>
							No doctors found matching your criteria
						</Heading>
						<Text color="gray.600" mb={6}>
							Try adjusting your search filters or try a different specialty.
						</Text>
						<Button colorScheme="brand" onClick={clearFilters}>
							Clear All Filters
						</Button>
					</Box>
				) : (
					<>
						<Heading as="h2" size="lg" mb={6}>
							{doctors.length} Doctors Available
						</Heading>
						<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
							{doctors.map((doctor) => (
								<DoctorCard key={doctor.id} {...doctor} />
							))}
						</SimpleGrid>
					</>
				)}
			</Container>
		</MainLayout>
	);
}
