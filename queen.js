var board = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];

let queen={
    x:0,
    y:4
}
function changedirection()
{
    
    var value=document.getElementById("a8").value; 
    var a=value.split(" ");
    console.log(a);
    a.forEach(move => {
       let step=Number(m.slice(0,m.length-1));
       let dir=(m.slice(0,m.length-1));
       jumpMoveForward(dir,step);
       console.log(dir); 
    });
    console.log("queens current postion ="+board[x][y]);
    document.getElementById("output").innerHTML-board[x][y];
    var i=x;var board = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];
    
    let queen={
        x:0,
        y:4
    }
    function changedirection()
    {
        
        var value=document.getElementById(a1).value; 
        var a=value.split(" ");
        console.log(a);
        a.forEach(move => {
           let step=Number(m.slice(0,m.length-1));
           let dir=(m.slice(0,m.length-1));
           jumpMoveForward(dir,step);
           console.log(dir); 
        });
        console.log("queens current postion ="+board[x][y]);
        document.getElementById("output").innerHTML-board[x][y];
        var i=x;
        var j=y;
        var queenpos= i+j;
        console.log(queenpos);
    }
    
    function jumpMoveForward(dir,step)
    {
        switch(dir)
        {
            case 'N':
                {
                    x=x-(step);
             if(x<0)
            console.log("Move Exhaust");
            else
            console.log(x);
            break;
                }
                case 'S':
                {
                    x=x+(step);
             if(x<0)
            console.log("Move Exhaust");
            else
            console.log(x);
            break;
                }
                case 'E':
                {
                    y=y+(step);
             if(y>8)
            console.log("Move Exhaust");
            else
            console.log(y);
            break;
                }
    
                case 'W':
                    {
                        y=y-(step);
                 if(y>8)
                console.log("Move Exhaust");
                else
                console.log(y);
                break;
                    }
                    case 'NE':
                        {
                            x=x-(step);
                            y=y+(step);
                     if(x>8 || y>8)
                    console.log("Move Exhaust");
                    else
                    console.log(x,y);
                    break;
                        }
                        case 'NW':
                        {
                            x=x-(step);
                            y=y-(step);
                     if(x>8||y>8)
                    console.log("Move Exhaust");
                    else
                    console.log(x,y);
                    break;
                        }
                        case 'SE':
                        {
                            x=x+(step);
                            y=y+(step);
                     if(x>8||y>8)
                    console.log("Move Exhaust");
                    else
                    console.log(x,y);
                    break;
                        }
                        case 'SW':
                        {
                            x=x+(step);
                            y=y-(step);
                     if(x>8 ||y>8)
                    console.log("Move Exhaust");
                    else
                    console.log(x,y);
                    break;
                        }   
        }
    
    }
    function updatePosition()
    {
    console.log("Queen's current Position ="+board[0][4]);
    }
    console.log(updatePosition());
    var j=y;
    var queenpos= i+j;
    console.log(queenpos);
}

function jumpMoveForward(dir,step)
{
    switch(dir)
    {
        case 'N':
            {
                x=x-(step);
         if(x<0)
        console.log("Move Exhaust");
        else
        console.log(x);
        break;
            }
            case 'S':
            {
                x=x+(step);
         if(x<0)
        console.log("Move Exhaust");
        else
        console.log(x);
        break;
            }
            case 'E':
            {
                y=y+(step);
         if(y>8)
        console.log("Move Exhaust");
        else
        console.log(y);
        break;
            }

            case 'W':
                {
                    y=y-(step);
             if(y>8)
            console.log("Move Exhaust");
            else
            console.log(y);
            break;
                }
                case 'NE':
                    {
                        x=x-(step);
                        y=y+(step);
                 if(x>8 || y>8)
                console.log("Move Exhaust");
                else
                console.log(x,y);
                break;
                    }
                    case 'NW':
                    {
                        x=x-(step);
                        y=y-(step);
                 if(x>8||y>8)
                console.log("Move Exhaust");
                else
                console.log(x,y);
                break;
                    }
                    case 'SE':
                    {
                        x=x+(step);
                        y=y+(step);
                 if(x>8||y>8)
                console.log("Move Exhaust");
                else
                console.log(x,y);
                break;
                    }
                    case 'SW':
                    {
                        x=x+(step);
                        y=y-(step);
                 if(x>8 ||y>8)
                console.log("Move Exhaust");
                else
                console.log(x,y);
                break;
                    }   
    }

}
function updatePosition()
{
console.log("Queen's current Position ="+board[0][4]);
}
console.log(updatePosition());