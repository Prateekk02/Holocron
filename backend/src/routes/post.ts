import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@codewalker66/holocron-common";



export const postRouter = new Hono<{
  Bindings:{
    DATABASE_URL : string,
    JWT_SECRET : string
  },
  Variables:{
    userId: string,
    prisma: PrismaClient
  }
}>();

// Database Middleware
postRouter.use("*", async(c,next) =>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate()); 

    c.set("prisma", prisma);
    await next();
    
})

// Authentication Middleware
postRouter.use("/*", async (c,next) =>{
    // extract the user id 
    // pass it down to route handler.
    
    try{
      const authHeader =  c.req.header('authorization') || ""
      const user = await verify(authHeader, c.env.JWT_SECRET) as {id:string} 
  
      if(user){
        c.set("userId", user.id)
        await next();
      }
      
    }
    catch(e){
      c.status(403)
      return c.json({
        message: "Your are not logged in"
      })
    }

    
})


postRouter.post('/', async (c) => {
  
  const prisma = c.get("prisma");
  try{
    const userId = c.get("userId");  
    const body = await c.req.json();
    const {success} = createPostInput.safeParse(body);
    if(!success){
      c.status(400)
      return c.json({message:"Invalid Input"})
    }
    const post = await prisma.post.create({
      data:{
        title:body.title,
        content: body.content,
        authorId:userId
      }
    });
  
    return c.json({
      id: post.id
    })
  }catch(e){
    c.status(411)
    return c.json({
      error: e,
      message: "Something went wrong"
    })
  }  

})
  
  
postRouter.put('/', async (c) => {
  const prisma = c.get("prisma");
  try{
    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Invalid inputs."
      })
    }
    prisma.post.update({
      where:{
        id: body.id,
        authorId:body.authorId
      },
      data:{
        title: body.title,
        content: body.content
      }
    }) 
      return c.json({
        message: "Update Successful!!" 
      })
  }catch(e){
    c.status(411)
    return c.json({
      error: e,
      message: "Something went wrong" 
    })
  }

})

// Todo : Add Pagination. 
postRouter.get('/bulk', async (c) => {
  const prisma = c.get("prisma");

  console.log("Fetching posts..."); 

  try {
    const posts = await prisma.post.findMany({
        select:{
          content:true,
          title:true,
          id:true,
          author:{
              select:{
                name:true
              }
          }
        }
    }); 
    return c.json({ posts }); 
  } catch (error) {
    console.error("Error fetching posts:", error);
    c.status(500)
    return c.json({ message: "Internal Server Error" });
  }
});

postRouter.get('/:id', async (c) => {
  const prisma = c.get("prisma");

  const id = c.req.param('id');

  try{
    const post = await prisma.post.findFirst({
      where:{
        id
      },
      select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
      }

    })
  
    return c.json({
      post:post
    })
  }catch(e){
    c.status(404);
    return c.json({
      error: e,
      message: "Post not found!!!"
    }) 
  }

})




