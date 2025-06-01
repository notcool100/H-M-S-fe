"use client";

import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Heading,
	Input,
	Select,
	Stack,
	Textarea,
	useColorModeValue,
	useToast,
	Radio,
	RadioGroup,
	Checkbox,
	VStack,
	HStack,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import type { Resolver } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

// Define the form validation schema
const schema = yup.object().shape({
	fullName: yup.string().required("Full name is required"),
	age: yup
		.number()
		.positive("Age must be a positive number")
		.integer("Age must be an integer")
		.required("Age is required"),
	gender: yup.string().required("Gender is required"),
	phone: yup
		.string()
		.required("Phone number is required")
		.matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
	email: yup.string().email("Invalid email format").notRequired(),
	address: yup.string().notRequired(),
	serviceType: yup.string().required("Service type is required"),
	date: yup.string().required("Date is required"),
	timeSlot: yup.string().required("Time slot is required"),
	symptoms: yup.string().required("Please describe your symptoms or concerns"),
	consent: yup
		.boolean()
		.oneOf([true], "You must agree to the terms and conditions"),
	contactConsent: yup.boolean().notRequired(),
});

type FormData = yup.InferType<typeof schema>;

export default function AppointmentForm() {
	const toast = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema) as Resolver<FormData>,
		defaultValues: {
			gender: "",
			serviceType: "",
			timeSlot: "",
			consent: false,
			contactConsent: false,
		},
	});

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log("Form data:", data);

			toast({
				title: "Appointment request submitted",
				description: "We will contact you shortly to confirm your appointment.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});

			// Reset form or redirect
		} catch {
			toast({
				title: "Error",
				description:
					"There was an error submitting your request. Please try again.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Box
			rounded={"lg"}
			bg={useColorModeValue("white", "gray.700")}
			boxShadow={"lg"}
			p={8}
			width="100%"
		>
			<Heading fontSize={"2xl"} mb={6}>
				Book an Appointment
			</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={4}>
					<Heading size="sm" mb={2}>
						Personal Information
					</Heading>

					<FormControl isInvalid={!!errors.fullName}>
						<FormLabel>Full Name</FormLabel>
						<Input {...register("fullName")} />
						<FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
					</FormControl>

					<Flex gap={4} direction={{ base: "column", md: "row" }}>
						<FormControl isInvalid={!!errors.age}>
							<FormLabel>Age</FormLabel>
							<Input type="number" {...register("age")} />
							<FormErrorMessage>{errors.age?.message}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!!errors.gender}>
							<FormLabel>Gender</FormLabel>
							<Controller
								name="gender"
								control={control}
								render={({ field }) => (
									<RadioGroup {...field}>
										<HStack spacing={4}>
											<Radio value="male">Male</Radio>
											<Radio value="female">Female</Radio>
											<Radio value="other">Other</Radio>
										</HStack>
									</RadioGroup>
								)}
							/>
							<FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
						</FormControl>
					</Flex>

					<FormControl isInvalid={!!errors.phone}>
						<FormLabel>Phone Number</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents="none">
								<PhoneIcon color="gray.300" />
							</InputLeftElement>
							<Input
								type="tel"
								{...register("phone")}
								placeholder="10-digit number"
							/>
						</InputGroup>
						<FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errors.email}>
						<FormLabel>Email Address (optional)</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents="none">
								<EmailIcon color="gray.300" />
							</InputLeftElement>
							<Input type="email" {...register("email")} />
						</InputGroup>
						<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errors.address}>
						<FormLabel>Address (optional)</FormLabel>
						<Input {...register("address")} />
						<FormErrorMessage>{errors.address?.message}</FormErrorMessage>
					</FormControl>

					<Heading size="sm" mt={4} mb={2}>
						Service Details
					</Heading>

					<FormControl isInvalid={!!errors.serviceType}>
						<FormLabel>Service Type</FormLabel>
						<Select
							placeholder="Select service type"
							{...register("serviceType")}
						>
							<option value="doctor_appointment">Doctor Appointment</option>
							<option value="mri_booking">MRI Booking</option>
							<option value="ct_scan_booking">CT Scan Booking</option>
							<option value="lab_test">Lab Test</option>
							<option value="pharmacy">Pharmacy (Medicine Purchase)</option>
							<option value="general_inquiry">General Inquiry</option>
							<option value="ambulance_request">Ambulance Request</option>
						</Select>
						<FormErrorMessage>{errors.serviceType?.message}</FormErrorMessage>
					</FormControl>

					<Flex gap={4} direction={{ base: "column", md: "row" }}>
						<FormControl isInvalid={!!errors.date}>
							<FormLabel>Preferred Date</FormLabel>
							<Input type="date" {...register("date")} />
							<FormErrorMessage>{errors.date?.message}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!!errors.timeSlot}>
							<FormLabel>Preferred Time</FormLabel>
							<Select placeholder="Select time slot" {...register("timeSlot")}>
								<option value="morning">Morning (9 AM - 12 PM)</option>
								<option value="afternoon">Afternoon (12 PM - 4 PM)</option>
								<option value="evening">Evening (4 PM - 8 PM)</option>
							</Select>
							<FormErrorMessage>{errors.timeSlot?.message}</FormErrorMessage>
						</FormControl>
					</Flex>

					<FormControl isInvalid={!!errors.symptoms}>
						<FormLabel>Symptoms or Message</FormLabel>
						<Textarea
							{...register("symptoms")}
							placeholder="Please briefly describe your concern or symptoms"
							rows={4}
						/>
						<FormErrorMessage>{errors.symptoms?.message}</FormErrorMessage>
					</FormControl>

					<FormControl mt={4}>
						<FormLabel>Upload Prescription or Report (Optional)</FormLabel>
						<Input type="file" p={1} accept=".jpg,.pdf,.png" />
					</FormControl>

					<VStack align="start" spacing={2} mt={4}>
						<FormControl isInvalid={!!errors.consent}>
							<Checkbox {...register("consent")}>
								I agree to the privacy policy and terms of service
							</Checkbox>
							<FormErrorMessage>{errors.consent?.message}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<Checkbox {...register("contactConsent")}>
								I consent to be contacted by Health Bridge representatives
							</Checkbox>
						</FormControl>
					</VStack>

					<Button
						mt={6}
						colorScheme="brand"
						bg="brand.500"
						color="white"
						_hover={{
							bg: "brand.600",
						}}
						size="lg"
						type="submit"
						isLoading={isSubmitting}
						loadingText="Submitting"
					>
						Submit Request
					</Button>
				</Stack>
			</form>
		</Box>
	);
}
