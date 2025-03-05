/* eslint-disable @typescript-eslint/no-require-imports */
const questions = require("../data/csQuestions");
let questionsPrisma:any;
async function seedQuestions(){
    const { PrismaClient } = require("@prisma/client");
    questionsPrisma = new PrismaClient();
    console.log("Seeding questions...");

    for(const question of questions){
        const createdQuestion = await questionsPrisma.question.create({
            data:{
                text: question.text,
                quizId: "67c7ba785fa10abbe991b2ab",
                option :{
                    create: question.option,
                },
                difficulty:question.difficulty,
            },
        });
        console.log(`Created question: ${createdQuestion.text}`);
    }
    console.log("Seeding questions completed.");
}

seedQuestions()
    .catch((e) => {
        console.log("Error seeding questions:",e);
    })
    .finally(async() => {
        await questionsPrisma.$disconnect();
    })