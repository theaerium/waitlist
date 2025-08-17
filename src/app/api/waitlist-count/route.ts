import { NextResponse } from 'next/server';
import { getWaitlistCount } from '@/utils/waitlist';

export async function GET() {
  try {
    const count = await getWaitlistCount();
    
    return NextResponse.json({ 
      success: true, 
      count 
    });
  } catch (error: unknown) {
    let message = 'Server error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
