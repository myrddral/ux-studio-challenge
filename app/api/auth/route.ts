import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth/auth'

export async function GET(req: NextRequest) {
  const { userId } = auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ userId })
}
