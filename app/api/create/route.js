import { StreamChat } from 'stream-chat';
import { clerkClient } from '@clerk/nextjs/server'

const api_key = "92bk8tmghth8";
const api_secret = "6d86kwddr7bdzzcw46uf68rsb3h7rs6sjmgcgr87pss6vfcp2xp7pguy5xurvmtf";
// const user_id = "user_2rbrBMz0YSUtPif2uDx2Rx85TKl";

export async function POST(request) {
    function changeSlugToName(slug) {
        return slug
          .replace(/-/g, ' ') // Replace hyphens with spaces
          .split(' ') // Split into words
          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
          .join(' '); // Join back into a single string
      }
    
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
    // // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A new user has been created with the id:", token);
    const client = await clerkClient()
    await serverClient.upsertUser({id: user.data.id})

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        },
    })

    const slugs = [
        "gaming-stuff-discussion",
        "technologies-discussion",
        "movies-discussion",
        "musics-discussion",
        "sport-discussion",
        "book-discussion",
        "food-discussion",
        "tourism-discussion",
        "news-discussion"
      ];

      slugs.forEach(async (item)=>{
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: changeSlugToName(item),
            created_by: user.data.id
          });
          await channel.create();
          channel.addMembers([user.data.id]);
      })
    return Response.json({ message: "Hello World" })
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ycmJyQk16MFlTVXRQaWYydUR4MlJ4ODVUS2wifQ.mNiB2TjD7S7uvpZw9ckF9x_NH2Qgq-SGT_X9PmFe4-Y