// src/app/api/signIn/route.ts

import { NextResponse } from 'next/server';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';
import dbConnect from '@/app/db/config' // Make sure this exists

export async function POST(req: Request) {
  await dbConnect(); // Connect to MongoDB

  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const user = await User.findOne({ email });


    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json(userWithoutPassword, { status: 200 });

  } catch (error) {
    console.error('Error during sign-in:', error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
