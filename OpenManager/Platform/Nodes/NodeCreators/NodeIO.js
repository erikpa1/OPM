class NodeIO extends GuiElement
{
    constructor(parent, type)
    {
        super();
        super.SetOnHoverCursorPointer();
        super.SetNodeParent(parent);
        this.isMarked = false;
        this.isSelected = false;
        this.UnMark();
        this.connectedIO = null;
        this.type = type;


    }

    SetConnectedIO(connectedIO)
    {
        this.connectedIO = connectedIO;

    }

    GetType()
    {
        return this.type;
    }

    GetConnectedIO()
    {
        return this.connectedIO;
    }

    GetConnectedNode()
    {
        return this.connectedNode.GetNodeParent();
    }

    IsMarked()
    {
        return this.isMarked;
    }

    Mark()
    {
        this.isMarked = true;
        super.SetBackgroundColor("#ff0c00");
    }

    UnMark()
    {
        this.isMarked = false;
        super.SetBackgroundColor("#930017");
    }

    Select()
    {
        this.isSelected = true;
        super.SetBackgroundColor("#13ff00");
    }

    Deselect()
    {
        this.isSelected = false;
        super.SetBackgroundColor("#930017");
    }










}