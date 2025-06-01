# Health Bridge - Healthcare Service Platform

Health Bridge is a comprehensive healthcare service platform that enables users to book doctor appointments, diagnostic tests, order medicines online, and access various health-related services through an intuitive web application.

## Sitemap and Page Structure

- Home
- About Us
- Book a Doctor
- Book Diagnostics (MRI, CT, Lab Tests)
- Buy Medicines (e-Pharmacy)
- Health Directory (Hospitals, Doctors, Ambulances)
- Contact & Support
- Login/Signup

## Key Features

- Doctor appointment booking
- Diagnostic test booking (MRI, CT, USG)
- Online medicine order with delivery tracking
- Prescription upload
- OTP/email-based login & registration
- Admin panel to manage services and users
- Live chat or chatbot for support

## Patient Inquiry Information

The platform collects the following patient information during service inquiries:

1. Personal Information
   - Full Name
   - Age
   - Gender
   - Phone Number
   - Email Address (optional)
   - Location/Address (optional)

2. Service Type (Multi-choice Dropdown)
   - Doctor Appointment
   - MRI Booking
   - CT Scan Booking
   - Lab Test (Blood, Urine, etc.)
   - Pharmacy (Medicine Purchase)
   - General Inquiry
   - Ambulance Request

3. Preferred Date & Time
   - Date (calendar input)
   - Time Slot (Morning/Afternoon/Evening or custom slot)

4. Symptoms or Message (for diagnostics or doctor booking)
   - Text area for brief description of concern or symptoms

5. Upload Prescription or Report (Optional)
   - File upload field (.jpg, .pdf, .png allowed)

6. Consent & Agreement Checkbox
   - Agreement to privacy policy and terms of service
   - Consent to be contacted by Health Bridge representatives

## Patient Report Access Portal

- Secure login system for patients
- Secure report upload panel for Admin/Lab Staff
- Patient dashboard with notifications and report access

## E-Pharmacy Order Tracking System

- Upload prescriptions for medicine orders
- Track medicine order status (Processing / Shipped / Delivered)
- Choose delivery slot or pickup option

## Doctor Directory with Filters

- Search by Name, Specialization, Location
- Book appointment button
- Ratings or patient feedback (optional)

## Ambulance & Emergency Contact Directory

- Searchable list of verified ambulance services by district or location
- Direct call option or inquiry form

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
2. Navigate to the `frontend` directory
3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Starting the Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.
