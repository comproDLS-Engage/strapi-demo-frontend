import { draftMode } from 'next/headers'
export const dynamic = 'force-dynamic' // defaults to force-static
import { redirect } from 'next/navigation'

// export async function GET(request: Request) {
//   draftMode().enable()
//   console.log("reqaust", request)
//   return new Response('got it')
// }

import { getPostBySlug } from "../../utils/api-helpers";
import { fetchAPI } from "../../utils/fetch-api";
import { getPageBySlug } from '../../utils/get-page-by-slug';
    
export async function GET(req: any, res: any) {


  
  
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')
  // const type: string = searchParams.get('type')
 

  // Get the preview secret and the slug which needs to be previewed
  // const secret = req.query.secret;
  // const slug = req.query.slug;
  // If the secret passed as URL query parameter doesn't match the preview secret in .env
  // then send a 401-Unauthorized response
  // if (secret !== process.env.CLIENT_PREVIEW_SECRET) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  // If slug is not provided, send a 400-Bad Request response
  // if (!slug) {
  //   return res.status(400).json({ message: 'Parameter `slug` is not provided' });
  // }

  // Send a request to Strapi and fetch the article
  // to check if the provided slug exists



// let article;
//   if(type=='page'){
//      article = await getPageBySlug("['about']",'en');

//   }else{

//      article = await getPostBySlug(slug);
//   }
//   console.log("article123:", article)

//   if (article === null) {
//     return res.status(404).json({ message: 'Article not found' });
//   }


  draftMode().enable()

  redirect(`/en/${slug}`)


  // Enable Preview Mode by setting the cookies
  // res.setPreviewData({});
  // return new Response('got it')

  // Redirect to the path of the article slug
  // res.redirect(307, `/articles/${article.data[0].attributes.slug}`);
}



