// submit buttons
const getDropDown = document.getElementById('postTaskButton');
// const getParamsSubmit = document.getElementById('getParamsSubmit');
// const getQuerySubmit = document.getElementById('getQuerySubmit');

// // inputs
// const paramsInput = document.getElementById('params-input');
// const queryInput = document.getElementById('query-input');

// response section
const responseSection = document.getElementsByClassName('response-area')[0];
const toolsSection = document.getElementsByClassName('tools-response')[0];
const materialsSection = document.getElementsByClassName('materials-response')[0];
// const taskSection = document.getElementsByClassName('request-type')[0];
const addTaskSection = document.getElementsByClassName('task-drop-down')[0];

// handle submits

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

//need example of how to invoke this API request on page load! How do I do this with express?
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


// REPURPOSE to populate defined list of tasks
//separate functions may be needed to add task tools and materials lists
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
            // console.log('pink crane tool ?', tool)
           
            // const q = document.createTextNode(tool.quantity);
            // p.appendChild(q);
    
            
        })
    }
}

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
                //const p2 = document.createElement('p');
                
                //p.appendChild(p2);
            })
            // console.log('pink crane tool', tool)
           
            // const q = document.createTextNode(tool.quantity);
            // p.appendChild(q);
    
            
        })
    }
}

inventory();