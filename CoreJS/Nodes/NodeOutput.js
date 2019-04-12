class NodeOutput extends NodeElement
{
    constructor()
    {
        super();
        super.SetOnHoverCursorPointer();

        var tmpElement = super.GetReprezentation();
        tmpElement.classList.add("nodeOutput");
        tmpElement.classList.add("w3-display-topright");


    }

    GetReprezentation() {
        return super.GetReprezentation();
    }

}