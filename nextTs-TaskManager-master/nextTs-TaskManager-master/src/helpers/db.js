import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async  function dBConnection (request) {
   try {
      console.log("trying to connect dB")
      const {connection} = await mongoose.connect(process.env.Mongo_DB_URL) ;
      console.log("dB connected")
      console.log(connection.post)
        return NextResponse.json(connection)
   }catch (error){
      console.log(error)
   }
}