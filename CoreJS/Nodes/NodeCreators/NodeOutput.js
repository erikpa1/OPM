var SELECTED_OUTPUT = null;

class NodeOutput extends NodeIO
{
    constructor(parent, type)
    {
        super(parent, type);
        super.SetOnHoverCursorPointer();
        super.AddElementClass("w3-display-topright");
        super.AddElementClass("nodeOutput");
        super.SetOnClickReactor(this);
        this.line = new NodeLine(super.GetReprezentation(), super.GetConnectedIO());
        //super.AddElementChild(this.line);

    }

    CreateConnection(inputNode)
    {
        super.SetConnectedIO(inputNode);
        this.line.SetRightParent(inputNode.GetReprezentation());
        this.UpdateLine();
    }

    UpdateLine()
    {
        this.line.Update();
    }

    StartLineDragging()
    {

        function redraw(event)
        {
            //this.line.SetPositionOfRightPoint(event.clientX)
            //this.line.SetPositionOfRightPoint(event.clientY)
        }
        //redraw();
        //window.requestAnimationFrame(redraw);
    }

    ReactOnClick() {
        super.GetNodeParent().InformCanvasAboutInputMarking(super.GetType());
        super.Select();
        SELECTED_OUTPUT = this;
        this.StartLineDragging();
    }







}