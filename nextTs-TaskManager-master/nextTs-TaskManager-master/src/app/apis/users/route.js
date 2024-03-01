
import { dBConnection } from "@/helpers/db"
import { User } from "@/models/user"
import { NextResponse } from "next/server"
export async function GET  (request)  {
        dBConnection()
    let users = [] ;
    try {
       users = await  User.find()
       console.log(users)
       return NextResponse.json(users)
    }catch(error){
       console.log("error is" +error + "is error") ;
       return NextResponse.json({ message : "failed to get users" , status : "user"})
    }
      
} ;
 // data post 
 export async function POST(request) {
   try {
     const { name, email, password, about, profileUrl } = await request.json();
     const newUser = new User({
       name,
       email,
       password,
       about,
       profileURL: profileUrl // Corrected variable name to match schema
     });
     const createdUser = await newUser.save();
     return new NextResponse(JSON.stringify(createdUser), {
       status: 201,
       headers: {
         'Content-Type': 'application/json'
       }
     });
   } catch (err) {
     console.error("Error:", err);
     return new Response(JSON.stringify({
       message: "Failed to create user",
       status: false
     }), {
       status: 500,
       headers: {
         'Content-Type': 'application/json'
       }
     });
   }
 }
 