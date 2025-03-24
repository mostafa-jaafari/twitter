import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.sub;
        token.email = profile.email;
        token.name = profile.name;
        token.picture = profile.picture || profile.image || "";

        // تأكد من أن Firestore يعمل بشكل صحيح
        try {
          if (profile.email) {
            const userRef = doc(db, "users", profile.email);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
              await setDoc(userRef, {
                id: profile.sub,
                email: profile.email,
                name: profile.name,
                profileimage: profile.image,
                emailVerified: null,
              });
            }
          }
        } catch (error) {
          console.error("🔥 Firestore Error:", error);
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        image: token.picture,
      };
      return session;
    },
  },
});
