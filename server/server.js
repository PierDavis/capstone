const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const taskTemplate = [{
    name: 'save original floorboards',
    description: 'need to remove all floorboards from house carefully to not damage tongue and grooves. once boards are up, scrape any remaining tile and mastic off and remove all the nails from the boards.',
    requiredTools: [
        {
            name: 'pry bar',
            quantity: 2,
            haveIt: true
        },
        {
            name: 'hammer',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'sawzall',
            quantity: 2,
            haveIt: true
        }
    ],
    requiredMaterials: [
        {
            name: 'dust mask',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'trash bags',
            quantity: 10,
            haveIt: true
        },
        {
            name: 'work gloves',
            quantity: 1,
            haveIt: true
        }, 
    ]
},
{
    name: 'cover windows in plastic',
    description: 'need to remove all floorboards from house carefully to not damage tongue and grooves. once boards are up, scrape any remaining tile and mastic off and remove all the nails from the boards.',
    requiredTools: [
        {
            name: 'staple gun',
            quantity: 1,
            haveIt: false
        },
        {
            name: 'hammer',
            quantity: 2,
            haveIt: true
        },
        {
            name: 'scissors',
            quantity: 2,
            haveIt: true
        }
    ],
    requiredMaterials: [
        {
            name: 'plastic',
            quantity: 1,
            haveIt: false
        },
        {
            name: 'furring strips',
            quantity: 10,
            haveIt: false
        },
        {
            name: 'work gloves',
            quantity: 2,
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

const taskList = [];


app.get("/api/tasksInventory", (req, res) => {
        
        res.status(200).send(tasksInventory);
        //filter out just the items that match the query input, and return only those items
    // } else{
    // res.status(200).send(inventory);
    // }
});
//app.get('/api/taskShell)

// app.get("/api/savedTasks", (req, res) => {
//     let savedTaskList = taskTemplate.filter(item => taskList.includes(item.name))
//     res.status(200).send(tasksInventory);
//     //filter out just the items that match the query input, and return only those items
// // } else{
// // res.status(200).send(inventory);
// // }
// });

app.post("/api/singleTask/:item", (req, res) => {
const {item} = req.params;
taskList.push(item)
console.log('new task list is: ', taskList)
let fullTaskList = taskTemplate.filter(item => taskList.includes(item.name))
console.log('full task list is now: ', JSON.stringify(fullTaskList))
    res.status(200).send(fullTaskList);
});

// .send(taskTemplate.filter(item => item.name === req));
// }); add event listener for a click of add task button to newly created - send back items from template list, auto call 2nd function of filtered list to populate tools and materials 
//event listener to indicate the tools/materials for each task
//name of task goes to all three boxes, plus descr goes to task list, and tool names goes to tool list, material names goes to material list

app.listen(3000, () => console.log("Server is live on port 3000"));