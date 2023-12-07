import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject: any = {},
  options = {},
  isDraftMode = false
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    let queryString = qs.stringify(urlParamsObject);
    // if(queryString && !urlParamsObject['populate']){
    //   queryString = `populate=*&${queryString}`
    // }
    const requestUrl = `${getStrapiURL(
      `/api${path}${
        queryString
          ? isDraftMode
            ? `?publicationState=preview&${queryString}`
            : `?${queryString}`
          : ""
      }`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
