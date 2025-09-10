# University LMS

A modern Learning Management System built with Next.js, Prisma, and Supabase to address the limitations of traditional university LMS platforms.

## 🚀 Features

- **User Management**: Student, Faculty, and Admin roles with Supabase Auth
- **Course Management**: Create, edit, and organize courses with departments and terms
- **Assignment System**: Submit and grade assignments with file uploads
- **Exam System**: Comprehensive exam management with time limits and proctoring
- **Result Tracking**: Unified result management for all assessments
- **Transcript Generation**: Academic record generation with GPA calculation
- **Real-time Updates**: Live updates with Supabase real-time subscriptions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, intuitive interface with Next.js 15

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form management
- **Zustand** - State management

### Backend
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Database
- **Prisma** - Database ORM
- **Row Level Security** - Database security
- **Real-time subscriptions** - Live updates

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Prisma Studio** - Database management

## 📁 Project Structure

```
├── web/                     # Next.js application
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   ├── components/     # Reusable components
│   │   ├── lib/           # Utilities and configurations
│   │   └── generated/     # Prisma generated client
│   ├── prisma/            # Database schema and migrations
│   │   ├── schema.prisma  # Database schema
│   │   ├── migrations/    # Database migrations
│   │   └── seed.ts       # Seed data
│   └── public/           # Static assets
├── supabase/             # Supabase configuration
└── package.json         # Root package configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Supabase account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd university-lms
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cp web/.env.example web/.env.local
   ```
   
   Update `web/.env.local` with your Supabase credentials:
   ```env
   DATABASE_URL="your_supabase_database_url"
   DIRECT_URL="your_supabase_direct_url"
   NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
   ```

4. **Set up the database**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The system includes comprehensive data models:

- **User Management**: Profiles, roles, and authentication
- **Academic Structure**: Departments, terms, courses, and offerings
- **Enrollment System**: Student enrollments and teaching assignments
- **Assessment System**: Assignments, submissions, and grading
- **Exam System**: Exams, attempts, and proctoring
- **Result Management**: Unified result tracking and grade calculations
- **Transcript System**: Academic records and GPA tracking

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio
- `npm run db:reset` - Reset database

## 🏗️ Architecture

### Data Flow
1. **Authentication**: Supabase Auth handles user authentication
2. **Database**: PostgreSQL with Prisma ORM for type-safe queries
3. **API**: Next.js API routes for server-side logic
4. **Real-time**: Supabase real-time subscriptions for live updates
5. **Frontend**: Next.js App Router with TypeScript

### Security
- Row Level Security (RLS) policies in PostgreSQL
- JWT tokens for authentication
- Type-safe database queries with Prisma
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database powered by [Supabase](https://supabase.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database ORM by [Prisma](https://prisma.io/)