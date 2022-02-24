import NextAuth from "next-auth"
import { decode, encode } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Email",
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: credentials?.username,password:credentials?.password })
        };
        const fetched_request = await fetch('http://localhost:8000/api/auth/login/',requestOptions)
        const json_res = await fetched_request.json()
        console.log(json_res)
        
        if(fetched_request.ok)
        {
          
            return {
                id:json_res.user.pk,
                name:json_res.user.username,
                email:json_res.user.email
            }
        }
        return null;
         
        }
      })
,
      GoogleProvider({
        // @ts-ignore
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
     }),
  ],
  callbacks:{
      jwt:({token,user})=> {
          if(user)
          {
              token.id = user.id
          }
          return token
      },
      session:({session,token})=>{

        if(token)
        {
            session.id = token.id
        }
        return session
       }
  },
  secret:'test',
})