import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		50: "#e6f7ff",
		100: "#b3e0ff",
		200: "#80caff",
		300: "#4db3ff",
		400: "#1a9dff",
		500: "#0080ff", // Primary brand color
		600: "#0066cc",
		700: "#004d99",
		800: "#003366",
		900: "#001a33",
	},
	secondary: {
		50: "#f0f9ff",
		100: "#e1f3fe",
		200: "#bae5fd",
		300: "#7dd3fc",
		400: "#38bdf8",
		500: "#0ea5e9",
		600: "#0284c7",
		700: "#0369a1",
		800: "#075985",
		900: "#0c4a6e",
	},
	accent: {
		50: "#f0fdfa",
		100: "#ccfbf1",
		200: "#99f6e4",
		300: "#5eead4",
		400: "#2dd4bf",
		500: "#14b8a6",
		600: "#0d9488",
		700: "#0f766e",
		800: "#115e59",
		900: "#134e4a",
	},
};

const fonts = {
	heading: "Inter, system-ui, sans-serif",
	body: "Inter, system-ui, sans-serif",
};

const theme = extendTheme({
	colors,
	fonts,
	styles: {
		global: {
			body: {
				bg: "gray.50",
				color: "gray.800",
			},
		},
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: "semibold",
				borderRadius: "md",
			},
			variants: {
				solid: {
					bg: "brand.500",
					color: "white",
					_hover: {
						bg: "brand.600",
					},
				},
				outline: {
					borderColor: "brand.500",
					color: "brand.500",
					_hover: {
						bg: "brand.50",
					},
				},
				secondary: {
					bg: "secondary.500",
					color: "white",
					_hover: {
						bg: "secondary.600",
					},
				},
				accent: {
					bg: "accent.500",
					color: "white",
					_hover: {
						bg: "accent.600",
					},
				},
			},
			defaultProps: {
				variant: "solid",
			},
		},
		Card: {
			baseStyle: {
				container: {
					bg: "white",
					borderRadius: "lg",
					boxShadow: "md",
					overflow: "hidden",
				},
			},
		},
	},
});

export default theme;
