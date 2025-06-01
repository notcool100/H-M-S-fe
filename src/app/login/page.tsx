"use client";

import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// For demo purposes, we'll just redirect to dashboard
			toast({
				title: "Login successful",
				description: "Welcome back to Health Bridge!",
				status: "success",
				duration: 3000,
				isClosable: true,
			});

			router.push("/dashboard");
		} catch {
			toast({
				title: "Login failed",
				description: "Please check your credentials and try again.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<MainLayout>
			<Container maxW="lg" py={{ base: 12, md: 16 }}>
				<Stack spacing={8}>
					<Stack align="center">
						<Heading fontSize="3xl">Sign in to your account</Heading>
						<Text fontSize="lg" color="gray.600">
							to enjoy all of our health services ✌️
						</Text>
					</Stack>
					<Box
						rounded="lg"
						bg={useColorModeValue("white", "gray.700")}
						boxShadow="lg"
						p={8}
					>
						<form onSubmit={handleSubmit}>
							<Stack spacing={4}>
								<FormControl id="email" isRequired>
									<FormLabel>Email address</FormLabel>
									<Input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</FormControl>
								<FormControl id="password" isRequired>
									<FormLabel>Password</FormLabel>
									<InputGroup>
										<Input
											type={showPassword ? "text" : "password"}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<InputRightElement h="full">
											<Button
												variant="ghost"
												onClick={() =>
													setShowPassword((showPassword) => !showPassword)
												}
											>
												{showPassword ? <ViewIcon /> : <ViewOffIcon />}
											</Button>
										</InputRightElement>
									</InputGroup>
								</FormControl>
								<Stack spacing={10}>
									<Stack
										direction={{ base: "column", sm: "row" }}
										align="start"
										justify="space-between"
									>
										<Checkbox>Remember me</Checkbox>
										<NextLink href="/forgot-password" passHref>
											<Text color="brand.500">Forgot password?</Text>
										</NextLink>
									</Stack>
									<Button
										bg="brand.500"
										color="white"
										_hover={{
											bg: "brand.600",
										}}
										type="submit"
										isLoading={isLoading}
										loadingText="Signing in"
									>
										Sign in
									</Button>
								</Stack>
							</Stack>
						</form>

						<Stack pt={6}>
							<Text align="center">
								Don&apos;t have an account?{" "}
								<NextLink href="/register" passHref>
									<Text as="span" color="brand.500">
										Register
									</Text>
								</NextLink>
							</Text>
						</Stack>

						<Divider my={6} />

						<Stack spacing={2}>
							<Button
								w="full"
								variant="outline"
								leftIcon={
									<Box as="span" mr={1}>
										G
									</Box>
								}
							>
								Sign in with Google
							</Button>
							<Button
								w="full"
								colorScheme="facebook"
								leftIcon={
									<Box as="span" mr={1}>
										f
									</Box>
								}
							>
								Sign in with Facebook
							</Button>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</MainLayout>
	);
}
