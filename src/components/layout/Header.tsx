"use client";

import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Header() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
				position="sticky"
				top="0"
				zIndex="sticky"
				boxShadow="sm"
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
					<Text
						textAlign={useBreakpointValue({ base: "center", md: "left" })}
						fontFamily={"heading"}
						color={useColorModeValue("brand.500", "white")}
						fontWeight="bold"
						fontSize="xl"
					>
						<NextLink href="/" passHref>
							Health Bridge
						</NextLink>
					</Text>

					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify={"flex-end"}
					direction={"row"}
					spacing={6}
				>
					<Button
						as={NextLink}
						fontSize={"sm"}
						fontWeight={400}
						variant={"link"}
						href={"/login"}
					>
						Sign In
					</Button>
					<Button
						as={NextLink}
						display={{ base: "none", md: "inline-flex" }}
						fontSize={"sm"}
						fontWeight={600}
						color={"white"}
						bg={"brand.500"}
						href={"/register"}
						_hover={{
							bg: "brand.600",
						}}
					>
						Sign Up
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("brand.500", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								as={NextLink}
								p={2}
								href={navItem.href ?? "#"}
								fontSize={"sm"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								{navItem.label}
								{navItem.children && (
									<Icon
										as={ChevronDownIcon}
										transition={"all .25s ease-in-out"}
										w={4}
										h={4}
									/>
								)}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			as={NextLink}
			href={href ?? "#"}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("brand.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "brand.500" }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"brand.500"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={NextLink}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link
								key={child.label}
								as={NextLink}
								py={2}
								href={child.href ?? "#"}
							>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "Services",
		children: [
			{
				label: "Book a Doctor",
				subLabel: "Find and book appointments with specialists",
				href: "/book-doctor",
			},
			{
				label: "Diagnostics",
				subLabel: "Book MRI, CT Scan, Lab Tests and more",
				href: "/diagnostics",
			},
			{
				label: "e-Pharmacy",
				subLabel: "Order medicines online with delivery",
				href: "/pharmacy",
			},
		],
	},
	{
		label: "Health Directory",
		children: [
			{
				label: "Doctors",
				subLabel: "Find specialists by name or specialty",
				href: "/doctors",
			},
			{
				label: "Hospitals",
				subLabel: "Locate hospitals and clinics near you",
				href: "/hospitals",
			},
			{
				label: "Ambulances",
				subLabel: "Emergency ambulance services",
				href: "/ambulances",
			},
		],
	},
	{
		label: "About Us",
		href: "/about",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];
