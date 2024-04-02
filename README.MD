## Technology Stack

Expo
ReactNative
Sanity
Sanity-CLI
Redux
CMS

## Sanity.js file is not committed for security purpose but you can create in your root folder and add these entries

import {createClient} from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
projectId: '',
dataset: '',
useCdn: true, // set to `false` to bypass the edge cache
apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//Cors policy

export default client;
