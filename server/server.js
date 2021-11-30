const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())

const taskShell = {
    name: 'Save original pine floors',
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
}

//app.get('/api/taskShell)

app.listen(3000, () => console.log("Server is live on port 3000"));