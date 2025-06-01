"use client";

import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	SimpleGrid,
	Text,
	Badge,
	useColorModeValue,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Icon,
	HStack,
	Progress,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
} from "@chakra-ui/react";
import {
	CalendarIcon,
	TimeIcon,
	DownloadIcon,
	ViewIcon,
} from "@chakra-ui/icons";
import { FaFileMedical, FaPills, FaFlask, FaUserMd } from "react-icons/fa";
import NextLink from "next/link";

// Sample data for the dashboard
const upcomingAppointments = [
	{
		id: "1",
		doctor: "Dr. Sarah Johnson",
		specialty: "Cardiologist",
		date: "2023-06-15",
		time: "10:00 AM",
		status: "confirmed",
	},
	{
		id: "2",
		doctor: "Dr. Michael Chen",
		specialty: "Dermatologist",
		date: "2023-06-20",
		time: "2:30 PM",
		status: "pending",
	},
];

const recentPrescriptions = [
	{
		id: "1",
		doctor: "Dr. Sarah Johnson",
		date: "2023-05-30",
		medications: ["Atorvastatin 20mg", "Aspirin 81mg"],
		status: "active",
	},
	{
		id: "2",
		doctor: "Dr. Robert Williams",
		date: "2023-05-15",
		medications: ["Amoxicillin 500mg"],
		status: "completed",
	},
];

const testResults = [
	{
		id: "1",
		name: "Complete Blood Count",
		date: "2023-05-25",
		status: "completed",
	},
	{
		id: "2",
		name: "Lipid Panel",
		date: "2023-05-25",
		status: "completed",
	},
	{
		id: "3",
		name: "Chest X-Ray",
		date: "2023-06-02",
		status: "pending",
	},
];

const medicineOrders = [
	{
		id: "1",
		date: "2023-06-01",
		items: ["Paracetamol 500mg", "Vitamin D3"],
		total: 24.99,
		status: "delivered",
	},
	{
		id: "2",
		date: "2023-06-10",
		items: ["Amoxicillin 500mg", "Cough Syrup"],
		total: 35.5,
		status: "processing",
	},
];

export default function PatientDashboard() {
	const cardBg = useColorModeValue("white", "gray.800");
	// const borderColor = useColorModeValue("gray.200", "gray.700");

	return (
		<Container maxW="container.xl" py={8}>
			<Heading as="h1" size="xl" mb={8}>
				Patient Dashboard
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={8}>
				<StatCard
					title="Appointments"
					value="2"
					helpText="Upcoming"
					icon={FaUserMd}
					accentColor="brand.500"
				/>
				<StatCard
					title="Prescriptions"
					value="1"
					helpText="Active"
					icon={FaFileMedical}
					accentColor="green.500"
				/>
				<StatCard
					title="Test Results"
					value="3"
					helpText="Recent"
					icon={FaFlask}
					accentColor="purple.500"
				/>
				<StatCard
					title="Medicine Orders"
					value="2"
					helpText="This month"
					icon={FaPills}
					accentColor="blue.500"
				/>
			</SimpleGrid>

			<Tabs colorScheme="brand" variant="enclosed" isLazy>
				<TabList>
					<Tab>Appointments</Tab>
					<Tab>Prescriptions</Tab>
					<Tab>Test Results</Tab>
					<Tab>Medicine Orders</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Box overflowX="auto">
							<Table variant="simple">
								<Thead>
									<Tr>
										<Th>Doctor</Th>
										<Th>Specialty</Th>
										<Th>Date</Th>
										<Th>Time</Th>
										<Th>Status</Th>
										<Th>Actions</Th>
									</Tr>
								</Thead>
								<Tbody>
									{upcomingAppointments.map((appointment) => (
										<Tr key={appointment.id}>
											<Td>{appointment.doctor}</Td>
											<Td>{appointment.specialty}</Td>
											<Td>{appointment.date}</Td>
											<Td>{appointment.time}</Td>
											<Td>
												<Badge
													colorScheme={
														appointment.status === "confirmed"
															? "green"
															: "yellow"
													}
												>
													{appointment.status}
												</Badge>
											</Td>
											<Td>
												<HStack spacing={2}>
													<Button
														as={NextLink}
														href={`/appointments/${appointment.id}`}
														size="sm"
														leftIcon={<ViewIcon />}
														colorScheme="brand"
														variant="outline"
													>
														View
													</Button>
													{appointment.status === "confirmed" && (
														<Button
															as={NextLink}
															href={`/appointments/${appointment.id}/reschedule`}
															size="sm"
															leftIcon={<CalendarIcon />}
															colorScheme="blue"
															variant="outline"
														>
															Reschedule
														</Button>
													)}
												</HStack>
											</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</Box>
						<Button
							as={NextLink}
							href="/book-doctor"
							mt={4}
							colorScheme="brand"
							leftIcon={<CalendarIcon />}
						>
							Book New Appointment
						</Button>
					</TabPanel>

					<TabPanel>
						<SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
							{recentPrescriptions.map((prescription) => (
								<Card key={prescription.id} bg={cardBg} boxShadow="md">
									<CardHeader pb={0}>
										<Flex justify="space-between" align="center">
											<Heading size="md">Prescription</Heading>
											<Badge
												colorScheme={
													prescription.status === "active" ? "green" : "gray"
												}
											>
												{prescription.status}
											</Badge>
										</Flex>
									</CardHeader>
									<CardBody>
										<Text>Doctor: {prescription.doctor}</Text>
										<Text>Date: {prescription.date}</Text>
										<Text fontWeight="bold" mt={2}>
											Medications:
										</Text>
										<Box pl={4}>
											{prescription.medications.map((med, index) => (
												<Text key={index}>• {med}</Text>
											))}
										</Box>
									</CardBody>
									<Divider />
									<CardFooter>
										<HStack spacing={4}>
											<Button
												leftIcon={<ViewIcon />}
												colorScheme="brand"
												variant="outline"
												as={NextLink}
												href={`/prescriptions/${prescription.id}`}
												size="sm"
											>
												View Details
											</Button>
											<Button
												leftIcon={<DownloadIcon />}
												colorScheme="blue"
												variant="outline"
												size="sm"
											>
												Download
											</Button>
											{prescription.status === "active" && (
												<Button
													colorScheme="green"
													variant="solid"
													as={NextLink}
													href={`/pharmacy/order-prescription/${prescription.id}`}
													size="sm"
												>
													Order Medicines
												</Button>
											)}
										</HStack>
									</CardFooter>
								</Card>
							))}
						</SimpleGrid>
					</TabPanel>

					<TabPanel>
						<Box overflowX="auto">
							<Table variant="simple">
								<Thead>
									<Tr>
										<Th>Test Name</Th>
										<Th>Date</Th>
										<Th>Status</Th>
										<Th>Actions</Th>
									</Tr>
								</Thead>
								<Tbody>
									{testResults.map((test) => (
										<Tr key={test.id}>
											<Td>{test.name}</Td>
											<Td>{test.date}</Td>
											<Td>
												<Badge
													colorScheme={
														test.status === "completed" ? "green" : "yellow"
													}
												>
													{test.status}
												</Badge>
											</Td>
											<Td>
												<HStack spacing={2}>
													{test.status === "completed" && (
														<>
															<Button
																as={NextLink}
																href={`/test-results/${test.id}`}
																size="sm"
																leftIcon={<ViewIcon />}
																colorScheme="brand"
																variant="outline"
															>
																View
															</Button>
															<Button
																size="sm"
																leftIcon={<DownloadIcon />}
																colorScheme="blue"
																variant="outline"
															>
																Download
															</Button>
														</>
													)}
													{test.status === "pending" && (
														<Button
															size="sm"
															leftIcon={<TimeIcon />}
															colorScheme="yellow"
															variant="outline"
															isDisabled
														>
															Pending
														</Button>
													)}
												</HStack>
											</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</Box>
						<Button
							as={NextLink}
							href="/diagnostics"
							mt={4}
							colorScheme="brand"
							leftIcon={<FaFlask />}
						>
							Book New Test
						</Button>
					</TabPanel>

					<TabPanel>
						<SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
							{medicineOrders.map((order) => (
								<Card key={order.id} bg={cardBg} boxShadow="md">
									<CardHeader pb={0}>
										<Flex justify="space-between" align="center">
											<Heading size="md">Order #{order.id}</Heading>
											<Badge
												colorScheme={
													order.status === "delivered"
														? "green"
														: order.status === "processing"
															? "yellow"
															: "blue"
												}
											>
												{order.status}
											</Badge>
										</Flex>
									</CardHeader>
									<CardBody>
										<Text>Date: {order.date}</Text>
										<Text fontWeight="bold" mt={2}>
											Items:
										</Text>
										<Box pl={4}>
											{order.items.map((item, index) => (
												<Text key={index}>• {item}</Text>
											))}
										</Box>
										<Text fontWeight="bold" mt={2}>
											Total: ${order.total.toFixed(2)}
										</Text>

										{order.status === "processing" && (
											<Box mt={4}>
												<Text mb={1}>Order Status:</Text>
												<Progress
													value={30}
													size="sm"
													colorScheme="brand"
													borderRadius="full"
												/>
												<Flex justify="space-between" mt={1}>
													<Text fontSize="xs">Processing</Text>
													<Text fontSize="xs">Shipped</Text>
													<Text fontSize="xs">Delivered</Text>
												</Flex>
											</Box>
										)}
									</CardBody>
									<Divider />
									<CardFooter>
										<HStack spacing={4}>
											<Button
												leftIcon={<ViewIcon />}
												colorScheme="brand"
												variant="outline"
												as={NextLink}
												href={`/orders/${order.id}`}
												size="sm"
											>
												View Details
											</Button>
											{order.status === "delivered" && (
												<Button colorScheme="green" variant="outline" size="sm">
													Reorder
												</Button>
											)}
											{order.status === "processing" && (
												<Button
													leftIcon={<TimeIcon />}
													colorScheme="blue"
													variant="outline"
													as={NextLink}
													href={`/orders/${order.id}/track`}
													size="sm"
												>
													Track Order
												</Button>
											)}
										</HStack>
									</CardFooter>
								</Card>
							))}
						</SimpleGrid>
						<Button
							as={NextLink}
							href="/pharmacy"
							mt={4}
							colorScheme="brand"
							leftIcon={<FaPills />}
						>
							Order Medicines
						</Button>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	);
}

interface StatCardProps {
	title: string;
	value: string;
	helpText: string;
	icon: React.ElementType;
	accentColor: string;
}

const StatCard = ({
	title,
	value,
	helpText,
	icon,
	accentColor,
}: StatCardProps) => {
	const cardBg = useColorModeValue("white", "gray.800");

	return (
		<Box
			p={5}
			shadow="md"
			borderWidth="1px"
			borderRadius="lg"
			bg={cardBg}
			position="relative"
			overflow="hidden"
		>
			<Box
				position="absolute"
				top={0}
				left={0}
				height="4px"
				width="100%"
				bg={accentColor}
			/>
			<Flex justify="space-between">
				<Stat>
					<StatLabel color="gray.500">{title}</StatLabel>
					<StatNumber fontSize="3xl" fontWeight="bold">
						{value}
					</StatNumber>
					<StatHelpText>{helpText}</StatHelpText>
				</Stat>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					borderRadius="full"
					bg={`${accentColor}20`}
					p={3}
					height="fit-content"
				>
					<Icon as={icon} w={6} h={6} color={accentColor} />
				</Box>
			</Flex>
		</Box>
	);
};
