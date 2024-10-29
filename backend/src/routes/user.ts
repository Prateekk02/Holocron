import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@codewalker66/holocron-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
      prisma: PrismaClient
    }
}>();

userRouter.use("*", async(c,next)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  c.set("prisma", prisma);
  await next();
})

userRouter.post('/signup', async (c) => {
    
    const prisma = c.get("prisma");
    try{
      const body = await c.req.json();
      const { success } = signupInput.safeParse(body)
      if(!success){
        c.status(411);
        return c.json({message: "Invalid Input type"})
      }
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        },
      });
    
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    
      return c.json({
        jwt: token
      })
      }catch(e){
        c.status(411)
        return c.json({
          error:e,
          message: "Something went wrong"
        })
      }
  })
    
  userRouter.post('/signin', async (c) => {

    const prisma = c.get("prisma");   
    try{
      const body = await c.req.json();
      const { success } = signinInput.safeParse(body)
        if(!success){
          c.status(411);
          return c.json({message: "Invalid Input type"})
        }
      const user = await prisma.user.findUnique({
          where: {
              email: body.email,
              password: body.password
          }
      });

      if (!user) {
          c.status(403);
          return c.json({ error: "user not found" });
      }

      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
  }catch(e){
    c.status(411);
    return c.json({
      error: e, 
      message: "Something went wrong"
    })
  }
})


