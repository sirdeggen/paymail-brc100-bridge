import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    return Response.json({ 
        bsvalias: '1.0',
        capabilities: {
            "6745385c3fc0":false,
            "pki": `https://${process.env.NEXT_PUBLIC_HOST}/api/paymail/pki/{alias}@{domain.tld}`,
            "f12f968c92d6": `https://${process.env.NEXT_PUBLIC_HOST}/api/paymail/profile/{alias}@{domain.tld}`,
            "2a40af698840": `https://${process.env.NEXT_PUBLIC_HOST}/api/paymail/destinations/{alias}@{domain.tld}`,
            "5c55a7fdb7bb": `https://${process.env.NEXT_PUBLIC_HOST}/api/paymail/beef/{alias}@{domain.tld}`,
            "5f1323cddf31": `https://${process.env.NEXT_PUBLIC_HOST}/api/paymail/tx/{alias}@{domain.tld}`,
        }
     }, { status: 200 })
}

export async function OPTIONS(request: Request) {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
}