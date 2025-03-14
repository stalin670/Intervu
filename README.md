# Intervu Platform

A comprehensive interview platform with video call capabilities, live code editor, screen recording, and screen sharing functionality designed to streamline the technical interview process.

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) + [React](https://reactjs.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Convex](https://www.convex.dev/) (Backend-as-a-Service)
- **Authentication**: [Clerk](https://clerk.dev/) (User management and authentication)
- **Video/Audio**: WebRTC integration for video calls, screen sharing, and recording
- **Deployment**: [Vercel](https://vercel.com/)

## 🔗 Live Demo

Check out the live demo of Intervu Platform [here](https://intervu-three.vercel.app/).

## ✨ Features

- **Authentication & User Management**: Secure login and signup using Clerk with role-based access (interviewer/candidate).
- **Video Interview**: High-quality video calls with screen sharing capabilities.
- **Live Code Editor**: Collaborative code editor for technical interviews.
- **Screen Recording**: Record interview sessions for future reference and evaluation.
- **Interview Scheduling**: Create and manage interview schedules with notifications.
- **Dashboard**: Comprehensive dashboard to track upcoming and past interviews.
- **Meeting Management**: Create new calls, join existing ones via links, and schedule future interviews.
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing.
- **Comments & Ratings**: Leave feedback and ratings for candidates after interviews.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 📂 Project Structure

### Frontend (Next.js)

```bash
frontend/
├── public/               # Public assets and files
├── src/
│   ├── app/              # Next.js app directory with route groups
│   │   ├── (auth)/       # Authentication related pages
│   │   ├── (dashboard)/  # Dashboard and user interface
│   │   ├── (meeting)/    # Video call and interview components
│   │   └── api/          # API route handlers
│   ├── components/       # Reusable React components
│   │   ├── ui/           # UI components (buttons, inputs, etc.)
│   │   ├── meeting/      # Video call related components
│   │   ├── code-editor/  # Code editor components
│   │   └── dashboard/    # Dashboard components
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React context providers
│   └── styles/           # Global styles and Tailwind config
├── .env.example          # Example environment variables
├── .gitignore            # Ignored files and directories
├── convex/               # Convex database schema and functions
│   ├── _generated/       # Generated Convex types
│   ├── schema.ts         # Database schema definition
│   ├── users.ts          # User-related API functions
│   └── interviews.ts     # Interview-related API functions
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## 💻 Database Schema

### Users Table
- **name**: User's full name
- **email**: User's email address
- **image**: Optional profile picture URL
- **role**: Either "interviewer" or "candidate"
- **clerkId**: Unique identifier from Clerk authentication

### Interviews Table
- **title**: Interview title/position
- **description**: Optional details about the interview
- **startTime**: Scheduled start time (timestamp)
- **endTime**: Optional end time when completed
- **status**: Current status of the interview (scheduled, in-progress, completed, etc.)
- **streamCallId**: Unique identifier for the video call
- **candidateId**: ID of the candidate being interviewed
- **interviewerIds**: Array of interviewer IDs participating

### Comments Table
- **content**: Feedback text content
- **rating**: Numerical rating of the candidate
- **interviewerId**: ID of the interviewer leaving feedback
- **interviewId**: Reference to the interview

## 💻 How to Run Locally

### Step 1: Clone the repository
```bash
git clone https://github.com/yourusername/intervu.git
```

### Step 2: Navigate to the project directory and install dependencies
```bash
cd intervu
npm install
```

### Step 3: Set up environment variables

Create a `.env.local` file in the root directory and add the following variables:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
CONVEX_DEPLOYMENT=your_convex_deployment_id

# Other configurations
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 4: Start the development server
```bash
npm run dev
```

### Step 5: Visit the App
To view your application, open the following URL in your browser:

[http://localhost:3000](http://localhost:3000)

## 🚀 API Endpoints

### User Management
- `syncUser`: Sync user data with Clerk authentication
- `getUsers`: Retrieve all users
- `getUserByClerkId`: Get user details by Clerk ID

### Interview Management
- `getAllInterviews`: Get all interviews
- `getMyInterviews`: Get interviews for the current user
- `getInterviewByStreamCallId`: Get interview details by stream call ID
- `createInterview`: Schedule a new interview
- `updateInterviewStatus`: Update interview status

## 🌟 Key Workflows

### For Interviewers
1. **Create Interview**: Schedule a new interview with candidate details
2. **Join Interview**: Connect to scheduled interviews via dashboard or direct link
3. **Conduct Interview**: Use video call, screen sharing, and live code editor
4. **Provide Feedback**: Leave comments and ratings after completing interviews

### For Candidates
1. **Join Interview**: Connect to interviews via received links
2. **Participate**: Share screen, use code editor to solve problems
3. **View History**: Access past interviews and recordings

## 👥 Contributing

Contributions are welcome! If you'd like to improve Intervu or fix any bugs, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## 📞 Contact

For any questions or suggestions, please reach out to [ydamit5840@gmail.com](mailto:ydamit5840@gmail.com).
