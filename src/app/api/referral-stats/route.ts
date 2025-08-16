import { NextRequest, NextResponse } from 'next/server';
import { getReferralStats } from '@/utils/waitlist';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const referralId = searchParams.get('id');
    
    if (!referralId) {
      return NextResponse.json({ error: 'Referral ID is required' }, { status: 400 });
    }
    
    const stats = await getReferralStats(referralId);
    
    if (!stats) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, stats });
  } catch (error: unknown) {
    let message = 'Server error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
