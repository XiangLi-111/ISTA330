/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {

   
    

    s = s.split('');
    // console.log(s);

    
    var store = [[0,0]];
    let location = [0,0];

    s.forEach(element => {
        

        if(element === 'N'){
            location[1] += 1;
        }else if (element === 'S'){
            location[1] -= 1;
        }else if (element === 'E'){
            location[0] += 1;
        }else{
            location[0] -= 1;
        }

        x = location[0];
        y = location[1];

        // console.log('location',location);
        store.push([x, y]);
        // console.log('store', store);

    });

    b = false;

    store.forEach((ele, idx) =>{
        x = ele[0];
        y = ele[1];
        for (let index = idx+1; index < store.length; index++) {
            if(store[index][0] === x & store[index][1] === y){
                b = true;
                break;
            }
            
        }
    })


   return b;

};