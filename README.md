# Bloggie

Bloggie is a modern, full-stack blogging platform built with React, Redux, Appwrite, and TailwindCSS. It allows users to create, edit, and manage blog posts with a beautiful and responsive UI. The project leverages Appwrite for authentication, database, and file storage, providing a robust backend-as-a-service experience.

## Features

- **User Authentication**: Secure sign up, login, and logout functionality using Appwrite.
- **Post Management**: Create, edit, and delete blog posts with rich text editing.
- **Image Uploads**: Upload and display featured images for posts.
- **Responsive UI**: Clean, mobile-friendly design using TailwindCSS.
- **Role-based Access**: Only authors can edit or delete their own posts.
- **Routing**: Client-side routing with React Router.
- **State Management**: Global state handled via Redux Toolkit.
- **Appwrite Integration**: Utilizes Appwrite for database, authentication, and file storage.

## Tech Stack

- **Frontend**: React, Redux Toolkit, React Router, TailwindCSS, Vite
- **Backend (BaaS)**: Appwrite
- **Rich Text Editor**: TinyMCE React
- **Other Libraries**: React Hook Form, React Icons, HTML React Parser

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- An Appwrite instance (self-hosted or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bloggie.git
   cd bloggie
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add your Appwrite credentials:
   ```
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   VITE_RTE_API_KEY=your_rte_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  appwrite/         # Appwrite service and auth logic
  assets/           # Static images and assets
  components/       # Reusable React components
  pages/            # Page-level components (Home, Login, Signup, etc.)
  store/            # Redux slices and store configuration
  conf/             # Appwrite and environment configuration
  index.css         # TailwindCSS imports
  main.jsx          # App entry point
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Future Scope

- Enhanced security features
- Improved UI/UX
- Smoother user experience
- Additional post management features

## License

This project is licensed under the MIT License.