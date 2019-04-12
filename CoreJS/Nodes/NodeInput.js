class NodeInput extends NodeElement
{
    constructor()
    {
        super();
        super.SetOnHoverCursorPointer();

        var tmpElement = super.GetReprezentation();
        tmpElement.classList.add("nodeInput");
        tmpElement.classList.add("w3-display-topleft");
    }

    GetReprezentation() {
        return super.GetReprezentation();
    }

}