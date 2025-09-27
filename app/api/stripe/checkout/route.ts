import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

function getPriceId(tier: string, billing: 'monthly' | 'annually') {
  const envName = `STRIPE_PRICE_${tier.toUpperCase()}_${billing.toUpperCase()}`
  // e.g. STRIPE_PRICE_STARTER_MONTHLY
  return process.env[envName as keyof NodeJS.ProcessEnv]
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { tier, billing = 'monthly' } = body as { tier: string; billing: 'monthly' | 'annually' }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    const priceId = getPriceId(tier, billing)
    if (!priceId) {
      return NextResponse.json({ error: `Missing price ID for ${tier} ${billing}` }, { status: 400 })
    }

    const successUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success`
    const cancelUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cancel`

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId as string, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
