//import scrapped from "./pricing.mjs";
console.log("That is here");

// import './calculating-costs.js';
document.addEventListener("DOMContentLoaded", function(){

    console.log("So, DOM didn't load?");
  

    let area =  Number(localStorage.getItem("area"));
    let floors =  Number(localStorage.getItem("floors"));
    

    console.log("Floors are ", floors)

        console.log("DOM fully loaded and parsed");
      //  const areaSqFt = parseInt(document.getElementById("area").value);
       // let floors = parseInt(document.getElementById("totalFloors").value);
        let choice = document.querySelector('input[name="userChoice"]:checked');
        console.log("Area before ", area);
            
        floors = floors || 1; 
        console.log("Floors are ", floors);
        area = floors*area;
     

    
    const bricksPerSqFt = 8;        // bricks per square foot
    const cementBagsPerSqFt = 0.05; // cement bags per square foot
    const sandCftPerSqFt = 0.03;    // cubic feet of sand per square foot
    const crushCftPerSqFt = 0.02;   // cubic feet of crush per square foot
    const plumbingCostPerSqFt = 150; // PKR per square foot (example)

    // Calculations
    const bricks = Math.round(area * bricksPerSqFt);
    const cementBags = (area * cementBagsPerSqFt).toFixed(2);

    const sandCft = (area * sandCftPerSqFt).toFixed(2);
    const crushCft = (area * crushCftPerSqFt).toFixed(2);
    const plumbingCosts = (area * plumbingCostPerSqFt).toFixed(2);

    document.getElementById("cement_used").innerText = "Cement bags : " + cementBags;
    document.getElementById("sand_used").innerText = "Sand lorries : "+ sandCft;
    console.log(document.getElementById("sand_used").innerText);
    document.getElementById("crush_used").innerText = "Crush Lorries : "+ crushCft;
    document.getElementById("plumbing_used").innerText = "Plumbing costs" +plumbingCosts;

            console.log(cementBags);
            console.log(sandCft);
            console.log(crushCft);
            console.log(plumbingCosts);  

    if (choice == 'industory'){
        console.log("Industory");
    }
    else{
        console.log("Choice is ", choice);
    }
}
       
    )

    window.items = ["window", crushCft];
    console.log("Script loaded sucessfully!");