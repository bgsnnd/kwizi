let categsPrisma: any;

async function addCategories() {
    const { PrismaClient } = require("@prisma/client");
    
    categsPrisma = new PrismaClient();
   
    const categories = [
        {
            name: "Science",
            description: "Science is the pursuit and application of knowledge."
        },
        {
            name: "Technology",
            description: "Dive into the latest technological advancements."
        },
        {
            name: "Programming",
            description: "Learn about coding and software development."
        },
        {
            name: "Computer Science",
            description: "Understand the fundamentals of computer adn algorithms."
        },
        {
            name: "Mathematics",
            description: "Master of language of number and patterns."
        },
        {
            name: "History",
            description: "Discover the events that shaped our world."
        },
        {
            name: "Art",
            description: "Appreciate creativity through various forms of art."
        },
        {
            name: "Geography",
            description: "Explore the physical features of out planet."
        },
        {
            name: "Physics",
            description: "Unravel the laws governing the universe."
        },
        {
            name: "Biology",
            description: "Study the science of living organism."
        },
    ];

    console.log("Adding Categories...");
    for (const category of categories) {
        await categsPrisma.category.create({
            data:category,
        })
    }

    console.log("Categories Added Successfully!");
}

addCategories()
    .catch((e)=> {
        console.log("Error Adding Categories:",e);
    })
    .finally(async()=>{
        await categsPrisma.$disconnect();
    });