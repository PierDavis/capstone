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
        },
        {
            name: 'hand saw',
            quantity: 2,
            haveIt: true
        },
    ],
    requiredMaterials: [
        {
            name: "10 x 100' roll of clear 6-mil plastic sheeting",
            quantity: 1,
            haveIt: false
        },
        {
            name: "1 x 2 x 8' furring strips",
            quantity: 10,
            haveIt: false
        },
        {
            name: 'box of nails',
            quantity: 1,
            haveIt: false
        },
        {
            name: 'work gloves',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'remove nails from joists',
    description: 'remove the nails from joists as floor boards are pulled up',
    requiredTools: [
        {
            name: 'hammer',
            quantity: 2,
            haveIt: false
        },
        {
            name: 'end-cutting pliers',
            quantity: 2,
            haveIt: false
        },
    ],
    requiredMaterials: [
        {
            name: 'rusty nail bucket',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'work gloves',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'sweep basement',
    description: 'pretty straightforward, the basement needs attention, but make sure upper floor edges are swept first.',
    requiredTools: [
        {
            name: 'broom',
            quantity: 2,
            haveIt: false
        },
        {
            name: 'dustpan',
            quantity: 2,
            haveIt: true
        },
    ],
    requiredMaterials: [
        {
            name: 'box of garbage bags',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'nitrile or work gloves',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'scrap paint off brick foundation',
    description: '',
    requiredTools: [
        {
            name: '',
            quantity: 2,
            haveIt: false
        },
        {
            name: '',
            quantity: 2,
            haveIt: false
        },
    ],
    requiredMaterials: [
        {
            name: '',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'nitrile or work gloves',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'restore brick fireplace',
    description: '',
    requiredTools: [
        {
            name: 'broom',
            quantity: 2,
            haveIt: false
        },
        {
            name: 'dustpan',
            quantity: 2,
            haveIt: true
        },
    ],
    requiredMaterials: [
        {
            name: '',
            quantity: 1,
            haveIt: true
        },
        {
            name: '',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'rip out attic framing',
    description: 'insert.',
    requiredTools: [
        {
            name: 'hammer',
            quantity: 2,
            haveIt: false
        },
        {
            name: 'end-cutting pliers',
            quantity: 2,
            haveIt: false
        },
    ],
    requiredMaterials: [
        {
            name: 'rusty nail bucket',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'work gloves',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'wage war against vines',
    description: 'bring a friend or five.',
    requiredTools: [
        {
            name: 'broom',
            quantity: 2,
            haveIt: false
        },
        {
            name: 'dustpan',
            quantity: 2,
            haveIt: true
        },
    ],
    requiredMaterials: [
        {
            name: 'packs of landscape bags',
            quantity: 5,
            haveIt: true
        },
        {
            name: 'nitrile or work gloves',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'remove nails from floorboards',
    description: 'remove the nails from floorboards before transport, probably best to remove all nails from attic and second floor boards before removing first floor wood',
    requiredTools: [
        {
            name: 'hammer',
            quantity: 2,
            haveIt: false
        },
        {
            name: 'end-cutting pliers',
            quantity: 2,
            haveIt: false
        },
    ],
    requiredMaterials: [
        {
            name: 'rusty nail bucket',
            quantity: 1,
            haveIt: true
        },
        {
            name: 'work gloves',
            quantity: 2,
            haveIt: true
        }, 
    ]
},
{
    name: 'clean and plane floorboards',
    description: 'insert.',
    requiredTools: [
        {
            name: 'broom',
            quantity: 2,
            haveIt: false
        },
        {
            name: 'dustpan',
            quantity: 2,
            haveIt: true
        },
    ],
    requiredMaterials: [
        {
            name: 'box of garbage bags',
            quantity: 1,
            haveIt: true
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
    "restore brick fireplace",
    "rip out attic framing",
    "wage war against vines",
    "remove nails from floorboards",
    "clean and plane floorboards",

];

const taskList = [];
const otherTools = [];
const otherMaterials = [];

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

// Adds single task from taskTemplates to task list, then returns the whole list
app.post("/api/singleTask/:item", (req, res) => {
const {item} = req.params;
taskList.push(item)
console.log('new task list is: ', taskList)
let fullTaskList = taskTemplate.filter(item => taskList.includes(item.name))
console.log('full task list is now: ', JSON.stringify(fullTaskList))
    res.status(200).send(fullTaskList);
});

//ATTEMPT TO POST NEW TOOL AND MATERIAL TO LISTS
// const {
//     createTool,
//     createMaterial
// } = require('./client/index')

// app.post(`/api/singleTool`, createTool)
// app.post(`/api/singleMaterial`, createMaterial)

// Adds single tool to otherTools list, then returns the whole list of otherTools

app.post("/api/singleTool/:item", (req, res) => {
    const {item} = req.params;
    otherTools.push({'name': item})
    console.log('new tool list is: ', otherTools)
    // let fullToolList = taskTemplate.filter(item => toolList.includes(item.name))
    // console.log('full task list is now: ', JSON.stringify(fullToolList))
        res.status(200).send(otherTools);
    });

// .send(taskTemplate.filter(item => item.name === req));
// }); add event listener for a click of add task button to newly created - send back items from template list, auto call 2nd function of filtered list to populate tools and materials 
//event listener to indicate the tools/materials for each task
//name of task goes to all three boxes, plus descr goes to task list, and tool names goes to tool list, material names goes to material list

app.listen(3000, () => console.log("Server is live on port 3000"));