// submit ('Add Task' button) button on drop-down menu for taskInventory array
const getDropDown = document.getElementById('postTaskButton');

// inputs for the 'Add Tools' button
const addTool = document.getElementsByClassName('postNewTools') [0];
const singleTool = document.getElementsByClassName('add-tools-input') [0];

//inputs for the 'Add Materials' button
const addMaterial = document.getElementsByClassName('postNewMaterials') [0];
const singleMaterial = document.getElementsByClassName('add-materials-input') [0];

//inputs for the 'Add Notes' button
const addNote = document.getElementsByClassName('postNewNotes') [0];
const singleNote = document.getElementsByClassName('add-notes-input') [0];

// response section defines lists within boxes where data is sent
const responseSection = document.getElementsByClassName('response-area')[0];
const toolsSection = document.getElementsByClassName('tools-response')[0];
const materialsSection = document.getElementsByClassName('materials-response')[0];
// const notesSection = document.getElementsByClassName('notes-response') [0];

// const taskSection = document.getElementsByClassName('request-type')[0];
const addTaskSection = document.getElementsByClassName('task-drop-down')[0];

// handles submits for turning singleTask selected from tasksInventory into taskList with content from matching taskTemplate through 'singleTask api' aka
//CALLING FUNCTION TO POST TASKS/TOOLS/MATERIALS WITH CLICK TO BOXES
getDropDown.addEventListener('click', () => {
    axios
        .post(`http://localhost:3000/api/singleTask/${addTaskSection.value}`)
        .then(res => {
            console.log(res.data)
            addToTaskView(res.data)
            addToToolView(res.data)
            addToMaterialsView(res.data)
        })

});

//CALL FUNCTION TO POST SINGLE TOOL TO otherTools (TOOL LIST)
addTool.addEventListener('click', () => {
    axios
        .post(`http://localhost:3000/api/singleTool/${singleTool.value}`)
        .then(res => {
            console.log(res.data)
            addOtherToolsToToolView(res.data)
        })

});

function addOtherToolsToToolView(dataArr) {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const n = document.createTextNode(item.name)
            p.appendChild(n);
           
    
            toolsSection.appendChild(p)
        })
    }

//CALL FUNCTION TO POST SINGLE MATERIAL TO otherMaterials (MATERIAL LIST)
addMaterial.addEventListener('click', () => {
    axios
        .post(`http://localhost:3000/api/singleMaterial/${singleMaterial.value}`)
        .then(res => {
            console.log(res.data)
            addOtherMaterialsToMaterialView(res.data)
        })

});

function addOtherMaterialsToMaterialView(dataArr) {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const n = document.createTextNode(item.name)
            p.appendChild(n);
           
    
            materialsSection.appendChild(p)
        })
    }

//CALL FUNCTION TO POST SINGLE NOTE TO otherNotes (TASK LIST)
addNote.addEventListener('click', () => {
    axios
        .post(`http://localhost:3000/api/singleNote/${singleNote.value}`)
        .then(res => {
            console.log(res.data)
            addOtherNotesToNoteView(res.data)
        })

});

function addOtherNotesToNoteView(dataArr) {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const n = document.createTextNode(item.name)
            p.appendChild(n);
           
    
            responseSection.appendChild(p)
        })
    }
    
    

const inventory = () => {
    axios
        .get('http://localhost:3000/api/tasksInventory')
        .then(res => {
            addToDropDown(res.data)
            //addToView(res.data)
        console.log('this is a test', res.data)})
};
console.log(inventory)


const savedTask = () => {
    axios
        .get('http://localhost:3000/api/tasksInventory')
        .then(res => {
            addToDropDown(res.data)
            //addToView(res.data)
        console.log('this is a test', res.data)})
};
console.log(inventory)


//populate defined list of tasks
function addToDropDown(tasksArr) {
    addTaskSection.innerHTML = null;

    if (tasksArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        tasksArr.forEach(item => {
            // var el = document.createElement("option");
            const li = document.createElement('option');
            li.textContent = item;
            li.value = item;
            //const t = document.createTextNode(item)
            //el.appendChild(t);
    
            addTaskSection.appendChild(li)
        })
    }
}

function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
}
//THIS FUNCTION ADDS STORED ARRAY NAME + DESCRIPTION TO TASK LIST
function addToTaskView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            const n = document.createTextNode(item.name)
            p.appendChild(n);
            const d = document.createTextNode(item.description)
            p2.appendChild(d);
            p.appendChild(p2);

    
            responseSection.appendChild(p)
        })
    }
}

//THIS FUNCTION ADDS STORED ARRAY OF TOOLS TO TOOL LIST
function addToToolView(dataArr) {
    toolsSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            console.log("item", item)
            item.requiredTools.forEach((subItemTool, subItemToolIndex) => { 
                    console.log('subItemTool object', subItemTool)
                    console.log('subItemTool index', subItemToolIndex)
                    console.log('tool qty', subItemTool.quantity)
                    console.log('tool name', subItemTool.name)

                const p = document.createElement('p');
                const n = document.createTextNode(subItemTool.name)
                p.appendChild(n);
                toolsSection.appendChild(p)
                //const p2 = document.createElement('p');
                const q = document.createTextNode(' (' + subItemTool.quantity + ')')
                p.appendChild(q);
                //p.appendChild(p2);
            })
           
            // const q = document.createTextNode(tool.quantity);
            // p.appendChild(q);
    
            
        })
    }
}
//THIS FUNCTION ADDS STORED ARRAY OF MATERIALS TO MATERIAL LIST
function addToMaterialsView(dataArr) {
    materialsSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            console.log("item", item)
            item.requiredMaterials.forEach((subItemMat, subItemMatIndex) => { 
                    console.log('subItemMat object', subItemMat)
                    console.log('subItemMat index', subItemMatIndex)
                    console.log('material qty', subItemMat.quantity)
                    console.log('material name', subItemMat.name)

                const p = document.createElement('p');
                const n = document.createTextNode(subItemMat.name)
                const q = document.createTextNode(' (' + subItemMat.quantity + ')');
                
                p.appendChild(n);
                p.appendChild(q);
                materialsSection.appendChild(p)
            
            })
           
            
        })
    }
}

inventory();