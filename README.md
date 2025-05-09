# Quantum Computing Society of the Philippines (QCSP) Website

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000?logo=shadcn&logoColor=white)](https://ui.shadcn.com/)

## Overview

The Quantum Computing Society of the Philippines (QCSP) website serves as the central hub for quantum computing enthusiasts, researchers, and professionals in the Philippines. This platform connects the quantum community, provides educational resources, and promotes quantum technology initiatives throughout the country.

## Features

- **Public Pages**:
  - Home page with featured events and organization overview
  - Explore page for quantum computing resources
  - About page with information about QCSP
  - Contact page for inquiries
  - Authentication for members

- **Member Dashboard**:
  - Events calendar and registration
  - Educational resources and materials
  - Online courses on quantum computing
  - Community forums and discussions
  - Notifications for updates and announcements
  - Interactive quantum applications
  - User profile management
  - Account settings
  - Support system

- **Admin Dashboard**:
  - Content management system
  - User management
  - Analytics and reporting

## Tech Stack

- **Frontend**:
  - React 18.3.1
  - TypeScript 5.5.3
  - React Router DOM 6.26.2
  - TanStack React Query 5.56.2
  - Tailwind CSS 3.4.11
  - shadcn/ui components
  - Lucide React icons

- **Build Tools**:
  - Vite 5.4.1
  - SWC (via @vitejs/plugin-react-swc)
  - ESLint 9.9.0
  - PostCSS 8.4.47

- **Additional Libraries**:
  - Three.js for 3D visualizations
  - React Hook Form for form handling
  - Zod for schema validation
  - date-fns for date manipulation
  - Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/andreafaith/QCSP-Site.git
cd QCSP-Site

# Install dependencies
npm install
# or
yarn install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
bun dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

```bash
# Build the application
npm run build
# or
yarn build
# or
bun build

# Preview the production build
npm run preview
# or
yarn preview
# or
bun preview
```

## Project Structure

```
QCSP-Site/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Shared components (Navbar, Footer, etc.)
│   │   ├── home/         # Home page specific components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── examples/     # Example components
│   │   └── ui/           # shadcn/ui components
│   ├── pages/            # Page components
│   │   └── dashboard/    # Dashboard page components
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Quantum Computing Society of the Philippines - [contact@qcsp.ph](mailto:contact@qcsp.ph)

Website: [https://www.qcsp.ph](https://www.qcsp.ph)
