import { SignUp } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  try {
    const req = await request.json();
    const result = await SignUp(req)

    if(result.status){
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "Register Success"
      })
    } else {
      return NextResponse.json({
        status: false,
        statusCode: 400,
        message: "Register Failed"
      }, {status: 400})
    }
  } catch(error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal server error"
    }, {status: 500})
  }
}