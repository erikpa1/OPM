class NodeLine extends NodeElement
{
    constructor(leftParent, rightParent)
    {
        super();
        this.leftParent = leftParent;
        this.rightParent = rightParent;
        this.reprezentation = document.createElement("SVG");

        this.line = document.createElement("LINE");
        this.line.classList.add("nodeLine");

        this.reprezentation.appendChild(this.line);
    }

    GetReprezentation() {
        return this.reprezentation;
    }

    Update()
    {
        this.line.setAttribute('x1', this.leftParent.left);
        this.line.setAttribute('y1', this.leftParent.top);
        this.line.setAttribute('x2', this.rightParent.left);
        this.line.setAttribute('y2', this.rightParent.top);

        this.line.setAttribute('x1', 100);
        this.line.setAttribute('y1', 100);
        this.line.setAttribute('x2', 300);
        this.line.setAttribute('y2', 300);
    }



}