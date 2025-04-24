import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "@/app/lib/axios"; // Assuming this is your axios instance
import User from "@/app/models/User"; // Import your User model

 const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Use axiosInstance for the API call instead of fetch
          const response = await axiosInstance.post("/api/signIn", {
            email: credentials?.email,
            password: credentials?.password,
          });

          // Assuming the API response contains the user data
          const user = response.data;

          if (user) {
            // Check if user exists in the database using the imported User model
            const dbUser = await User.findOne({ email: credentials?.email });

            if (dbUser) {
              // Return the user if found in the database
              return dbUser;
            }
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }
        return null; // Return null if user is not found or any error occurs
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Will disable the new account creation screen
  },
  debug: true, // Enable debug logs for more detailed error tracking
};

const handler  = NextAuth(authOptions)

export {handler as GET, handler as POST}
