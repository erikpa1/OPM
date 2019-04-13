class NodeOutput extends NodeIO
{
    constructor(parent)
    {
        super(parent);
        super.SetOnHoverCursorPointer();
        super.AddElementClass("w3-display-topright");
        super.AddElementClass("nodeOutput");
        super.SetOnClickReactor(this);

    }

    CreateConnection(inputNode)
    {
        super.SetConnectedIO(inputNode);
        super.GetConnectedIO().SetConnectedIO(this);
        this.line = new NodeLine(this, super.GetConnectedIO());
        this.line.Update();
        super.AddElementChild(this.line);

    }

    StartLineDragging()
    {
        function redraw(event)
        {
            this.line.SetPositionOfRightPoint(event.clientX)
            this.line.SetPositionOfRightPoint(event.clientY)
        }
        window.requestAnimationFrame(redraw);
    }

    ReactOnClick() {
        this.StartLineDragging();
    }







}