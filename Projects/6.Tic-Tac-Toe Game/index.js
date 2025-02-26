
const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");
/* used to initialise initally when website is reloaded*/

let currentPlayer;
let gameGrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

    /* lets create a function to initialise the game */

  // isse saare ke saare boxes par event listner add ho gaya jab bhi koi bhi button click hoga to handleclick wala button 
  // chalega aur konsa box click hua hai mujhe vo kaise pata chalega,index se pata chalega
  function initialiseGame()
    {
        currentPlayer="X";
        gameGrid=["","","","","","","","",""]; 
         // UI par boxes ko empty krne ka code above 4lines
        boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
          // when previous game is over for next game remove the green color of last game
          // for that we will initialise box with CSS properties
          box.classList=`box box${index+1}`;  /* iska mtlb hai ki har ek index ke liye box class mei box[index+1] class ki conditions 
                                                  jo initially hai CSS file mei us class ki vo hume fir se reapply kr di jisse box game 
                                                   ke starting mei jaisa tha vaisa fir se hojayega.*/ 
       });

       newGameBtn.classList.remove("active");
       gameInfo.innerText=`Current Player - ${currentPlayer}`;

    }

  initialiseGame();

  boxes.forEach((box,index)=>{
    box.addEventListener("click" ,()=>{
        handleClick(index);
      } )
  });

  // gamegrind varibale innerlogic ko darshata hai aur boxes[] vo UI ko darshata hai
 
function handleClick(index)
  {
       if(gameGrid[index]==="")
          {
             boxes[index].innerText=currentPlayer; // it changes in Ui
             gameGrid[index]=currentPlayer;  // gameGrid Waale array ke andar value daalti hai
             boxes[index].style.pointerEvents="none";
             //swap karo turn ko
             swapTurn();
             //check karo jeet gaya ya nahi
             checkGameOver();
          }
  }

  function swapTurn()
     {
         if(currentPlayer==="X")
               {
                  currentPlayer="O";
               }
        
         else
            {
                currentPlayer="X";
            }

        //UI upadate

        gameInfo.innerText=`Current Player - ${currentPlayer}`;
     }


     function checkGameOver()
         {
              let answer="";
              winningPosition.forEach((position)=>{

                   if((gameGrid[position[0]]!=="" || gameGrid[position[1]] !=="" || gameGrid[position[2]] !=="") &&
                         (gameGrid[position[0]]=== gameGrid[position[1]]) && ( gameGrid[position[1]] === 
                         gameGrid[position[2]] ))
                   // this code inside if is showing all the boxes should be non empty and exactly same in value
                      {
                               // to check who is the winner X or Y
                               if(gameGrid[position[0]]==="X")
                                    {
                                        answer="X";
                                    }
                               
                            else
                              {
                                answer="O";
                              }
                       
                           //since someone has win then simply stop the game
                          // disable pointer events - means we are not allowing user to put X or O in the box
                          boxes.forEach((box)=>{
                              box.style.pointerEvents="none";
                          })


                          //NOW we know who is the winner X or Y
                          boxes[position[0]].classList.add("win");
                          boxes[position[1]].classList.add("win");
                          boxes[position[2]].classList.add("win");
                    }

                  //when there is no winner or in case game is tied
                  let fillCount=0;
                  gameGrid.forEach((box)=>{
                       if(box!=="")
                          {
                              fillCount++;
                          }
                  })

                  //board is filled game is tied
                  if(fillCount===9)
                     {
                           gameInfo.innerText="Game Tied !";
                           newGameBtn.classList.add("active");
                     }
                    

                });
              
              // above if means we have a winner
              if(answer!=="")
                  {
                        // 1) thing to do show winner name in the heading
                        gameInfo.innerText=`Winner Player - ${answer}`;
                        
                        //2) active newgame btn
                        newGameBtn.classList.add("active"); 

                        //3) since someone has win then dont let the game to proceed do game over
                            return;
                  }
              
         }
    
    newGameBtn.addEventListener("click",initialiseGame);