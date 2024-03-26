import prisma  from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: "jwt-secret",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.User.findFirst({
          where: {
            email: {
              equals: email,
            },
          },
        });

        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid email or password");
        }
        return {
          email: "jayarasa@gmail.com",
          username: "admin",
          role: "admin",
          id: 1
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/api/auth/error",
  },

  callbacks: {
    async jwt({ token, account, profile ,user }) {
      if(account?.provider == "credentials"){
        token.email = user.email;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if("email" in token) {
        session.user.email = token.email;
      }
      if("username" in token) {
        session.user.username = token.username;
      }
      if("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);