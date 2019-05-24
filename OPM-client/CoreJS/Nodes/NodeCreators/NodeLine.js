class NodeLine extends GuiElement
{
    constructor(leftParent, rightParent)
    {
        super();
        this.leftParent = leftParent;
        this.rightParent = rightParent;
        this.svgNamespace = "http://www.w3.org/2000/svg";
        this.reprezentation = document.createElementNS(this.svgNamespace, "svg");
        this.line = document.createElementNS(this.svgNamespace, "line");
        this.line.classList.add("nodeLine");
        this.line.setAttribute('x1', "0");
        this.line.setAttribute('y1', "0");
        this.line.setAttribute('x2', "0");
        this.line.setAttribute('y2', "0");
        this.reprezentation.appendChild(this.line);
    }

    SetRightParent(parent)
    {
        this.rightParent = parent;
    }

    GetReprezentation() {
        return this.reprezentation;
    }

    Update()
    {
        this.line.setAttribute('x1',  "0"); //+this.leftParent.left);
        this.line.setAttribute('y1', "0");// +this.leftParent.top);

        if (this.rightParent != null)
        {
            this.line.setAttribute('x2', "100");//this.rightParent.left);
            this.line.setAttribute('y2', "100");//this.rightParent.top);
        }
    }

    SetPositionOfLeftPoint(x, y)
    {
        this.line.setAttribute('x1', x);
        this.line.setAttribute('y1', y);
        console.log("X and Y:" + x + " " + y);
    }

    SetPositionOfRightPoint(x, y)
    {
        this.line.setAttribute('x2', x);
        this.line.setAttribute('y2', y);
        console.log("X and Y:" + x + " " + y);
    }



}