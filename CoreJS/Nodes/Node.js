


class BasicNode
{
    constructor(name)
    {
        this.name = name;


        var node = document.createElement("DIV");
        node.classList.add("nodeBody");
        node.style.left = 250;
        node.style.top = 250;

        this.nodeHeader = new NodeHeader(name);

        node.appendChild(this.nodeHeader.getReprezentation());

        dragElement(node);
        scaleElement(node);

        this.reprezentation = node;
    }

    setCommentary(commentary)
    {
        this.commentary = commentary;
    }

    getCommentary()
    {
        return this.commentary;
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
