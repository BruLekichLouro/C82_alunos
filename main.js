


    function myMouseDown(e)
    {
        
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        
        if (mouseEvent == "mouseDown") {
        
        }

        
    }

    

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
