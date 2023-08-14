import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json({ message: 'hello world' }, { status: 200 });
}
