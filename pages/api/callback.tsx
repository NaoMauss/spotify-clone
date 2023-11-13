//https://accounts.spotify.com/authorize?client_id=b5aa14a0948245149c46eeef9563805f&response_type=code&redirect_uri=http://localhost:3000/api/callback&scope=user-modify-playback-state
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;
  const { CLIENT_ID, CLIENT_PRIVATE } = process.env;

  const creds = Buffer.from(`${CLIENT_ID}:${CLIENT_PRIVATE}`).toString('base64');
  const response = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${creds}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: 'http://localhost:3000/api/callback'
    })
  });

  const data = await response.json();
  res.redirect(`/?access_token=${data.access_token}&refresh_token=${data.refresh_token}`);
} 