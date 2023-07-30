import 'server-only';

import { Octokit } from '@octokit/rest';
import { queryBuilder } from 'lib/planetscale';
import { cache } from 'react';

const clientKey = 'WnIxOXowQURLWjFCM1FybERxa0g6MTpjaQ';
const clientSecret = 'oije7GLdhJrrpA1evPVcKiv5dW1d26teHiTwmEuvpZUWwrB2QW';

const credentials = `${clientKey}:${clientSecret}`;

// Create a buffer from the credentials string and encode it as base64
const base64Credentials = Buffer.from(credentials).toString('base64');
console.log(`Base64 encoded credentials: ${base64Credentials}`);

// export const getBlogViews = cache(async () => {
//   if (!process.env.TWITTER_API_TOKEN) {
//     return 0;
//   }

//   const data = await queryBuilder
//     .selectFrom('views')
//     .select(['count'])
//     .execute();

//   return data.reduce((acc, curr) => acc + Number(curr.count), 0);
// });

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
    return 0;
  }

  const response = await fetch(
    `https://api.twitter.com/oauth2/token?grant_type=client_credentials`,
    {
      method: 'POST', // Make sure to use the POST method for this endpoint
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        'Content-Type': `application/x-www-form-urlencoded;charset=UTF-8`,
      },
      body: `grant_type=client_credentials`,
    }
  ).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch token');
    }
    return response.json();
  })
    .then(data => {
      // Request 2: Use the access token to fetch tweets
      const accessToken = data.access_token;
      const userId = 'nahgostino'; // replace with your user ID
      return fetch(`https://api.twitter.com/2/users/${userId}/tweets`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch tweets');
      }
      return response.json();
    })
    .then(data => {
      console.log('Tweets:', data);
      return Number(data.public_metrics.tweet_count ? data.public_metrics.tweet_count : 0);
    })
    .catch(error => {
      console.error('Error:', error);
    });


}

export const getStarCount = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const req = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'nicholasdagostino',
    repo: 'nicholasdagostino.github.io',
  });

  return req.data.stargazers_count;
});
