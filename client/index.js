// submit buttons
const getDropDown = document.getElementById('postTaskButton');
// const getParamsSubmit = document.getElementById('getParamsSubmit');
// const getQuerySubmit = document.getElementById('getQuerySubmit');

// // inputs
// const paramsInput = document.getElementById('params-input');
// const queryInput = document.getElementById('query-input');

// response section
const responseSection = document.getElementsByClassName('response-area')[0];
// const taskSection = document.getElementsByClassName('request-type')[0];
const addTaskSection = document.getElementsByClassName('task-drop-down')[0];

// handle submits

getDropDown.addEventListener('click', () => {
    axios
        .post(`http://localhost:3000/api/singleTask/${addTaskSection.value}`)
        .then(res => console.log(res.data))

});

//need example of how to invoke this API request on page load! How do I do this with express?
const inventory = () => {
    axios
        .get('http://localhost:3000/api/tasksInventory')
        .then(res => {
            addToDropDown(res.data)
            addToView(res.data)
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


inventory();