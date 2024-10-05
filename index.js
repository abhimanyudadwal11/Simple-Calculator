var buttons = document.querySelectorAll("button");
var length=buttons.length;
var output = document.querySelector(".output-box p");
for (var i = 0; i<length; i++) {
    buttons[i].addEventListener("click", function (){
        if (this.getAttribute("id")==="c") {
            output.textContent="";
        }
        else if (this.getAttribute("id")==="del") {
            output.textContent=output.textContent.slice(0,-1);
        }
        else if (this.getAttribute("id")==="=") {
            output.textContent=eval(output.textContent);
        }
        else {
            if (output.textContent==="output"){
                output.textContent="";
            }
            output.textContent+=this.textContent;
        }
    })
}