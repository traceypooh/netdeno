import { encode } from 'https://deno.land/std@0.166.0/encoding/base64.ts'

export default async (req, context) => {
  const val = encode('blue')
  return new Response(`Hello ${val} world`)
}

export const config = {
  path: ['/'],
}
