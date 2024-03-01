import { User } from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { userID } = params;
  try {
    const user = await User.findById(userID);
    return NextResponse.json(user, {
      message: "USer Fetched",
      success: true,
    });
  } catch (error) {
    console.log("error is" + error)
    return NextResponse.json({
      message: "Failed to Fetch",
      success: false,
    });
  }
};

export async function DELETE(request, { params }) {
  const { userID } = params;
  try {
    await User.deleteOne({ _id: userID });
    return NextResponse.json({
      message: "Successfully DELETED USER",
      success: true,
    });
  } catch (err) {
    console.log(err, " is error");
    return NextResponse.json({
      message: "FAILED TO DELETE USER",
      STATUS: false,
    });
  }
}

  //api call to update user

export async function PUT (request , {params} ){
  const { userID} = params ;
  const { name , password , about , profileURL} = await request.json() ;
  try {
    const user = await User.findById(userID)
      user.name = name 
      user.password = password ,
      user.about = about 
      user.profileURL = profileURL 
      const updatedUser = await user.save()
      console.log(updatedUser)
      return NextResponse.json(updatedUser ,{
        message: "Updated Successfully",
        success: true,
      });
  }catch (err){
    console.log(err, " is error");
    return NextResponse.json({
      message: "FAILED TO UPDATE USER",
      STATUS: false,
    });
  }

}