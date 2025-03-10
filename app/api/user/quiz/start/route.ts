import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const authData = await auth();
        const { userId: clerkId } = authData;

        if (!clerkId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { categoryId } = await req.json();

        // 🔍 Cek apakah user ada di database
        let user = await prisma.user.findUnique({
            where: { clerkId },
        });

        // 🛠 Jika user tidak ditemukan, buat user baru
        if (!user) {
            console.log("User not found, creating new user...");
            user = await prisma.user.create({
                data: { clerkId },
            });
        }

        const userId = user.id;

        // 🔍 Cek atau buat CategoryStat
        let stat = await prisma.categoryStat.findFirst({
            where: { userId, categoryId },
        });

        if (!stat) {
            stat = await prisma.categoryStat.create({
                data: {
                    userId,
                    categoryId,
                    attempts: 1,
                    lastAttempt: new Date(),
                },
            });
        } else {
            stat = await prisma.categoryStat.update({
                where: { id: stat.id },
                data: {
                    attempts: stat.attempts + 1,
                    lastAttempt: new Date(),
                },
            });
        }

        return NextResponse.json(stat);
    } catch (error) {
        console.error("Error starting quiz:", error);
        return NextResponse.json(
            { error: "Error starting quiz", details: error},
            { status: 500 }
        );
    }
}
