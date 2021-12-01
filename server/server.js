const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const taskTemplate = [{
    name: 'Save original floorboards',
    description: 'Need to remove all floorboards from house carefully to not damage tongue and grooves. Once boards are up, scrape any remaining tile and mastic off and remove all the nails from the boards.',
    requiredTools: [
        {
            name: 'Pry bar',
            quantity: 2,
            haveIt: true
        },
        {
            name: 'Hammer',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'Sawzall',
            quantity: 2,
            haveIt: true
        }
    ],
    requiredMaterials: [
        {
            name: 'Dust mask',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'Trash bags',
            quantity: 10,
            haveIt: true
        },
        {
            name: 'Work gloves',
            quantity: 1,
            haveIt: true
        }, 
    ]
},
{
    name: 'Cover windows in plastic',
    description: 'Need to remove all floorboards from house carefully to not damage tongue and grooves. Once boards are up, scrape any remaining tile and mastic off and remove all the nails from the boards.',
    requiredTools: [
        {
            name: 'Pry bar',
            quantity: 2,
            haveIt: true
        },
        {
            name: 'Hammer',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'Sawzall',
            quantity: 2,
            haveIt: true
        }
    ],
    requiredMaterials: [
        {
            name: 'Dust mask',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'Trash bags',
            quantity: 10,
            haveIt: true
        },
        {
            name: 'Work gloves',
            quantity: 1,
            haveIt: true
        }, 
    ]
}]

//need to return this array via api - convert array to dictionary that contains required tools/materials in separate boxes
const tasksInventory = [
    "save original floorboards",
    "cover windows in plastic",
    "remove nails from joists",
    "sweep basement",
    "scrap paint off brick foundation",
    "clean brick fireplace",
    "rip out attic framing",
    "wage war against vines",
    "clean floorboards and plane",
    "remove nails from floorboards",
];
app.get("/api/tasks-inventory", (req, res) => {
    
        
        res.status(200).send(tasksInventory);
        //filter out just the items that match the query input, and return only those items
    // } else{
    // res.status(200).send(inventory);
    // }
});
//app.get('/api/taskShell)

app.listen(3000, () => console.log("Server is live on port 3000"));