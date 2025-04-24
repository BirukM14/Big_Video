import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import connectDB from "@/app/db/config";



export async function POST(request: Request) {

    console.log("Request received at /api/signUp");

    connectDB()

    const body = await request.json();
    const { name, email, password } = body;

    if(!name || !email || !password) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const isUserPresent = await User.findOne({ email });
    if (isUserPresent) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hashSync(password, 10);

    try{
       const user =  new User({
            name,email, password: hashedPassword
        });

    await user.save();
    const token = jwt.sign({name, email}, 'buravideo');
    const response = NextResponse.json({ message: "User created successfully" }, { status: 201 });
    response.cookies.set('token', token  )
    return response;

    }catch(err){
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
    }



    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
}