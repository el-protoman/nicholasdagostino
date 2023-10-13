import 'server-only';

import { Octokit } from '@octokit/rest';
import { queryBuilder } from 'lib/planetscale';
import { cache } from 'react';

const clientKey = 'WnIxOXowQURLWjFCM1FybERxa0g6MTpjaQ';
const clientSecret = 'oije7GLdhJrrpA1evPVcKiv5dW1d26teHiTwmEuvpZUWwrB2QW';

const credentials = `${clientKey}:${clientSecret}`;

// Create a buffer from the credentials string and encode it as base64
const base64Credentials = Buffer.from(credentials).toString('base64');
// console.log(`Base64 encoded credentials: ${base64Credentials}`);

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

// export async function getTweetCount() {
//   if (!process.env.TWITTER_API_TOKEN) {
//     return 0;
//   }

//   const response = await fetch(
//     `https://api.twitter.com/oauth2/token?grant_type=client_credentials`,
//     {
//       method: 'POST', // Make sure to use the POST method for this endpoint
//       headers: {
//         Authorization: `Basic ${base64Credentials}`,
//         'Content-Type': `application/x-www-form-urlencoded;charset=UTF-8`,
//       },
//       body: `grant_type=client_credentials`,
//     }
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch token');
//     }
//     return response.json();
//   })
//     .then(data => {
//       // Request 2: Use the access token to fetch tweets
//       const accessToken = data.access_token;
//       const userId = 'nahgostino'; // replace with your user ID
//       return fetch(`https://api.twitter.com/2/users/${userId}/tweets`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         },
//       });
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch tweets');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Tweets:', data);
//       return Number(data.public_metrics.tweet_count ? data.public_metrics.tweet_count : 0);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });


// }

// export async function getTweets(handle) {
//   try {
//     const res = await fetch(
//       `https://twitter.com/i/api/graphql/XicnWRbyQ3WgVY__VataBQ/UserTweets?variables=%7B%22userId%22%3A%22${handle}%22%2C%22count%22%3A20%2C%22includePromotedContent%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D`,
//       {
//         headers: {
//           accept: "*/*",
//           "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
//           authorization:
//             "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
//           "content-type": "application/json",
//           "sec-ch-ua":
//             '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
//           "sec-ch-ua-mobile": "?0",
//           "sec-ch-ua-platform": '"Windows"',
//           "sec-fetch-dest": "empty",
//           "sec-fetch-mode": "cors",
//           "sec-fetch-site": "same-origin",
//           "x-client-transaction-id":
//             "7W27QEBMnVg2q91drih4yAVphqZCmD4nwdjFXpY/CDNFVb0caBWAxyuVzK4umTD2pU/xlu1eS97J/TnoAP2Xk/ghIOCl7A",
//           "x-client-uuid": "35997b56-237a-4a68-aa02-58634e57fdbb",
//           "x-csrf-token":
//             "31be8c135484f7f01c85b16eafe8e4ebdb8f5aedda2a94e2c164ab579dc5bbfb4d3a22f209c986c7f3bc3d76754bdca4ae15e00a5d8e703ab0881d82f96d4da166b8138742dd6d2976f1da176e896938",
//           "x-twitter-active-user": "yes",
//           "x-twitter-auth-type": "OAuth2Session",
//           "x-twitter-client-language": "en",
//           cookie:
//             'ext_name=ojplmecpdpgccookcobabopnaifgidhf; guest_id=v1%3A168806923551444765; _ga=GA1.2.217571139.1688069236; guest_id_marketing=v1%3A168806923551444765; guest_id_ads=v1%3A168806923551444765; g_state={"i_l":0}; kdt=xPqTYjsZcFfMiojMYe4KCVbReyMW42LS5STg8tpi; auth_token=0d9338260b48d0d8f83a59f771857d24a2b3332c; ct0=31be8c135484f7f01c85b16eafe8e4ebdb8f5aedda2a94e2c164ab579dc5bbfb4d3a22f209c986c7f3bc3d76754bdca4ae15e00a5d8e703ab0881d82f96d4da166b8138742dd6d2976f1da176e896938; twid=u%3D2613454013; lang=en; _gid=GA1.2.1402795272.1690990388; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; personalization_id="v1_9pyn5l3m8MG4BDjO2K76gw=="',
//           Referer: `https://twitter.com/${handle}`,
//           "Referrer-Policy": "strict-origin-when-cross-origin",
//         },
//         body: null,
//         method: "GET",
//       }
//     );
//     // console.log(res);
//     const data = await res.json();
//     // console.log(data.data.user.result.legacy.statuses_count);
//     // console.log(
//     //   data.data.user.result.timeline_v2.timeline.instructions[2].entries[0]
//     //     .content.itemContent.tweet_results
//     // );
//     return (data.data.user.result.timeline_v2.timeline.instructions[2].entries);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export async function getUserInfo(handle) {
//   try {
//     const apiUrl = `https://twitter.com/i/api/graphql/SAMkL5y_N9pmahSw8yy6gw/UserByScreenName?variables=%7B%22screen_name%22%3A%22${handle}%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Afalse%2C%22hidden_profile_subscriptions_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Atrue%2C%22subscriptions_verification_info_is_identity_verified_enabled%22%3Afalse%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D&fieldToggles=%7B%22withAuxiliaryUserLabels%22%3Afalse%7D`;

//     const res = await fetch(apiUrl, {
//       headers: {
//         accept: "*/*",
//         "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
//         authorization:
//           "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
//         "content-type": "application/json",
//         "sec-ch-ua":
//           '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": '"Windows"',
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "x-client-transaction-id":
//           "HZ1LsLC8bajGWy2tXtiIOPWZdlayaM7XMSg1rmbP+MO1pU3smOVwN9tlPF7eacAGVbwBZh28QqtWWdF1vV0wDNJiWs1pHA",
//         "x-csrf-token":
//           "31be8c135484f7f01c85b16eafe8e4ebdb8f5aedda2a94e2c164ab579dc5bbfb4d3a22f209c986c7f3bc3d76754bdca4ae15e00a5d8e703ab0881d82f96d4da166b8138742dd6d2976f1da176e896938",
//         "x-twitter-active-user": "yes",
//         "x-twitter-auth-type": "OAuth2Session",
//         "x-twitter-client-language": "en",
//         cookie:
//           'ext_name=ojplmecpdpgccookcobabopnaifgidhf; guest_id=v1%3A168806923551444765; _ga=GA1.2.217571139.1688069236; guest_id_marketing=v1%3A168806923551444765; guest_id_ads=v1%3A168806923551444765; g_state={"i_l":0}; kdt=xPqTYjsZcFfMiojMYe4KCVbReyMW42LS5STg8tpi; auth_token=0d9338260b48d0d8f83a59f771857d24a2b3332c; ct0=31be8c135484f7f01c85b16eafe8e4ebdb8f5aedda2a94e2c164ab579dc5bbfb4d3a22f209c986c7f3bc3d76754bdca4ae15e00a5d8e703ab0881d82f96d4da166b8138742dd6d2976f1da176e896938; twid=u%3D2613454013; lang=en; _gid=GA1.2.1402795272.1690990388; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; personalization_id="v1_9pyn5l3m8MG4BDjO2K76gw=="',
//         Referer: `https://twitter.com/${handle}`,
//         "Referrer-Policy": "strict-origin-when-cross-origin",
//       },
//       method: "GET",
//     });

//     if (!res.ok) {
//       throw new Error(`API returned ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();
//     const tweets = data.data.user.result.legacy.statuses_count;
//     const rest_id = data.data.user.result.rest_id;
//     // console.log(data.data.user.result.legacy.statuses_count);
//     // console.log(data.data.user.result.id);
//     // await getTweets(data.data.user.result.rest_id);
//     return (
//       { tweets, rest_id }
//     );
//   } catch (error) {
//     console.log("error", error);
//   }
// }

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
