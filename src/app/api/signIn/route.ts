import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/app/models/User'; // Import your User model
import bcrypt from 'bcryptjs'; // You can use bcrypt for password hashing

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      // Find user in the database by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Return the user data (excluding the password)
      const { password: _, ...userWithoutPassword } = user.toObject();
      return res.status(200).json(userWithoutPassword);

    } catch (error) {
      console.error('Error during sign-in:', error);
      return res.status(500).json({ message: 'Something went wrong' });
    }
  }

  // If the method is not POST
  return res.status(405).json({ message: 'Method not allowed' });
}
