let errors = 5;
let numselected = null;
let tileselected = null;


let board = [
    "---8----9",
    "-19--583-",
    "-43-1---7",
    "4--15---3",
    "--27-4-1-",
    "-8--9-6--",
    "-7---63--",
    "-3--7--8-",
    "9-45----1"
]

let solution = [
    "256837149",
    "719425836",
    "843619257",
    "467158923",
    "392764518",
    "581392674",
    "178246395",
    "635971482",
    "924583761"
]

setGame()

function setGame()
{
        //Generate the digits
        for(let i=1; i<=9; i++)
            {
                let number = document.createElement('div')
                number.id = i
                number.innerText = i
                //Select number for the game that function name will be given
                number.addEventListener('click',selectNumber)
                number.classList.add('numbers') // for CSS style
                document.getElementById('digits').appendChild(number) 
            }
        for (let r=0; r<9; r++)
            {
                for(let c=0; c<9; c++)
                    {
                        let tile = document.createElement('div')
                        tile.id = r.toString()+"-"+c.toString();
                        if(board[r][c] != "-") // it will remove the "-" symbol that why we should use if loop
                            {
                                tile.innerHTML = board[r][c] // To accomodate the Board Values with "-"
                                tile.classList.add("tile-initial")
                            }
                        // to give horizontal line and vertical line
                        if(r == 2 || r == 5)
                            {
                                tile.classList.add("horizontal-line")
                            }
                        if(c == 2 || c == 5)
                            {
                                tile.classList.add("vertical-line")
                            }
                        // selection of number will affect in the title that we given a function
                        tile.addEventListener('click',selectTile)
                        tile.classList.add("tile");
                        document.getElementById("board").appendChild(tile)
                    }
            }
            

}

let timer;
let ele = document.getElementById('timer');
var sec=59;
var min=4;
function selectNumber()
{
    if(numselected != null)
        {
            numselected.classList.remove("selected")
        }
    // it will select all numbers but need if one select next will be remove that we use if loop above
    numselected = this 
    numselected.classList.add("selected")
    
  
    timer = setInterval(()=>
        {
            ele.innerHTML = "0" + min + ":" + sec;
            sec--;

            if(sec === 0){
                min=min - 1;
                ele.innerHTML = min + ":00";
                sec = 59;
            }
            if(min==-1)
            {   
                document.getElementById("errors2").innerHTML = "Time's Up! Game Over";
                document.getElementById("timer").innerHTML = "00:00";
                timer = clearInterval(timer);
            }
            
        },1000) 
}


function selectTile()
{
    if(numselected)
        {
            if(this.innerHTML != "")
                {
                    return
                }
        }
    // it will title the selected number would override so we use to avoid that override above nested if loop
    let num = this.id.split("-") // 0-0 as string
    let r = parseInt(num[0])
    let c = parseInt(num[1])
   
    
    //compare the numselected with our solution
    if(solution[r][c] == numselected.id)
        {
            this.innerHTML = numselected.id
        }
    else 
        {
            errors -= 1
            document.getElementById("errors").innerHTML = errors;
        }
    if(errors == 0) 
        {
            document.getElementById("errors1").innerHTML = "GAME OVER";
            timer = clearInterval(timer);
            errors = 0
        }
       
}



    