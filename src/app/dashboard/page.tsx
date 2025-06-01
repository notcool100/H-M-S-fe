"use client";

import MainLayout from "@/components/layout/MainLayout";
import PatientDashboard from "@/components/features/PatientDashboard";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
	return (
		<MainLayout>
			<Box bg="brand.500" py={8} color="white">
				<Container maxW="container.xl">
					<Heading as="h1" size="xl" mb={2}>
						Patient Dashboard
					</Heading>
					<Text fontSize="lg">
						Manage your appointments, prescriptions, test results, and more.
					</Text>
				</Container>
			</Box>

			<PatientDashboard />
		</MainLayout>
	);
}
