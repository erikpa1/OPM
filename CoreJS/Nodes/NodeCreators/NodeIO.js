class NodeIO extends NodeElement
{
    constructor(parent)
    {
        super();
        super.SetOnHoverCursorPointer();
        super.SetNodeParent(parent);

        this.connectedIO = null;
    }

    SetConnectedIO(connectedIO)
    {
        this.connectedIO = connectedIO;
    }

    GetConnectedIO()
    {
        return this.connectedIO;
    }

    GetConnectedNode()
    {
        return this.connectedNode.GetNodeParent();
    }





}