class NodeOutput extends NodeIO
{
    constructor(parent)
    {
        super(parent);
        super.SetOnHoverCursorPointer();
        super.AddElementClass("w3-display-topright");
        super.AddElementClass("nodeOutput");

    }

    CreateConnection(inputNode)
    {
        super.SetConnectedIO(inputNode);
        super.GetConnectedIO().SetConnectedIO(this);

        this.line = new NodeLine(this, super.GetConnectedIO());
        this.line.Update();
        super.AddElementChild(this.line);

    }




}