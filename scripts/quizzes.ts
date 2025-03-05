/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

let quizzesPrisma: any;

const quizzes = [
    {
        title: "Computer Science Basics",
        description: "A quiz about fundamental computer science concepts.",
        categoryId: "67c702bc62cb4661b629f249", // Replace with the actual category ID
    },
    {
        title: "Programming Fundamentals",
        description: "Test your knowledge of basic programming concepts.",
        categoryId: "67c702bc62cb4661b629f248",
    },
    {
        title: "Data Structures",
        description: "Assess your understanding of data structures.",
        categoryId: "67c702bc62cb4661b629f249",
    },
    {
        title: "Physics",
        description: "Test your knowledge of physics",
        categoryId: "67c702bc62cb4661b629f246",
    },
    {
        title: "Biology",
        description: "Test your knowledge of physics",
        categoryId: "67c702bc62cb4661b629f246",
    },
    {
        title: "Chemistry",
        description: "Test your knowledge of physics",
        categoryId: "67c702bc62cb4661b629f246",
    },

    
];

async function seedQuizzes(){
    quizzesPrisma = new PrismaClient();
    console.log("Seeding quizzes...");

    for (const quiz of quizzes){
        const createdQuiz = await quizzesPrisma.quiz.create({
            data: quiz,
        });

        console.log("Created quiz: ", `${createdQuiz.title}`);
    }
    console.log("Seeding quizzes completed.");
}

seedQuizzes().catch((e)=> {
    console.log("Error seeding quizzes:", e);
}).finally(async()=>{
    await quizzesPrisma.$disconnect();
});