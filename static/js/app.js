//data = list of UFO sightings in data.js
const tbody = d3.select("tbody");
//for each dictionary in the UFO sightings list...

function loadData() {
    data.map(ufosightings => {
        //insert a table row
        let row = tbody.append("tr");
        //within each row, for each key and value within each dictionary...
        Object.entries(ufosightings).forEach(([key, value]) => {
            //append a column
            let cell = tbody.append("td");
            //and its data value
            cell.text(value);
        });
    });
    return(data)
}
console.log(loadData())


//declare filter button and function when clicked
var filterbtn = d3.select("#filter-btn");
filterbtn.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //from the data (UFO sightings), only retrieve results where datetime=inputValue
    var results =  data.filter(function(x) {
        return x.datetime == inputValue;
    });
    console.log(results)

    //clear table - had to assign id to tbody element first.
    document.getElementById("UFOData").innerHTML = "";

    //append revised data results to table
    results.map(filteredUFOSightings => {
        //insert a table row
        let row = tbody.append("tr");
        //within each row, for each key and value within each dictionary...
        Object.entries(filteredUFOSightings).forEach(([key, value]) => {
            //append a column
            let cell = tbody.append("td");
            //and its data value
            cell.text(value);
        });
    });
});