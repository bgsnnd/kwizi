import { auth } from '@clerk/nextjs/server'
import React from 'react'
import prisma from '@/utils/connect';
import UserStats from '@/components/UserStats'; // Perbaiki nama import

async function Page(){
  const { userId } = await auth();
  if (!userId) {
    return { error: "You need to be logged in to view this page" };
  }

  // Mengambil data user
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      categoryStats: {
        include: {
          category: true
        },
      },
    },
  });

  console.log("User Stats:", user);

  return (
    <div>
      <UserStats userStats={user} />
    </div>
  )
}

export default Page;
