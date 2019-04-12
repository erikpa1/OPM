


class BasicNode extends React.Component
{
    constructor(name, canvas)
    {
        super();

        this.name = name;
        this.canvas = canvas;
        this.nodeHeader = new NodeHeader(name, this);


        this.fillNodeWithInput(this.nodeHeader.GetReprezentation());
        this.fillNodeWithOutput(this.nodeHeader.GetReprezentation());

        var node = document.createElement("DIV");
        node.classList.add("nodeBody");
        node.style.left = 250;
        node.style.top = 250;
        node.appendChild(this.nodeHeader.GetReprezentation());

        dragElement(node);
        scaleElement(node);

        this.reprezentation = node;
    }

    fillNodeWithInput(node)
    {
        node.appendChild(new NodeInput().GetReprezentation());
    }


    fillNodeWithOutput(node)
    {
        node.appendChild(new NodeOutput().GetReprezentation());
    }

    setNodeSelected()
    {
        this.nodeHeader.SetSelectedColor();
    }

    setNodeDeselected()
    {
        this.nodeHeader.SetUnselectedColor();

    }

    setCommentary(commentary)
    {
        this.commentary = commentary;
    }

    getCommentary()
    {
        return this.commentary;
    }

    GetCanvas()
    {
        return this.canvas;
    }

    getName()
    {
        return this.name;
    }

    getReprezentation()
    {
        return this.reprezentation;
    }

    getSerialized()
    {
        return "Serialized";
    }



}
