# CSS original code

## outer {
        width: 100px;
        height: 100px;
        background: darkcyan;
        margin: 50px;
 }
## inner {
        width: 50px;
        height: 50px;
        background: lightgreen;
        position: absulote;
        top: 10px; 
 }

# CSS code after editing


## .container{
       
       --------------------
        position: relative;
       --------------------
}
## #outer {
        width: 100px;
        height: 100px;
        background: darkcyan;
        margin: 50px;

        -------------------
        position: absolute;
        -------------------
 }
## #inner {
        width: 50px;
        height: 50px;
        background: lightgreen;
        
        -------------------
        position: absolute;
        -------------------

        top: 10px; 
 }

  # The changes that been made

    -Added another div 'Container' to warp the Outer and Inner div. 
    -Setting the Container's position to 'relative' and the Outer and Inner div to 'absulote'.
    -That change solves the problem because now the area of the inner box is the larger box and not the whole page, that way, the inner box will drop down 10px from the upper part of the box and not the whole page.

