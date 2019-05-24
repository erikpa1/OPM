
class BasicNode
{
    constructor(name, canvas)
    {
        this.name = name;
        this.canvas = canvas;
        this.nodeHeader = new NodeHeader(name, this);
        this.input = null;
        this.output = null;

        this.reprezentation = new NodeBody();
        this.reprezentation.AddElementChild(this.nodeHeader);

        this.FillNodeWithInput(this.nodeHeader, "Header");
        this.FillNodeWithOutput(this.nodeHeader, "Header");

        dragElement(this.reprezentation.GetReprezentation());
        scaleElement(this.reprezentation.GetReprezentation());

    }

    AddExternalElement(element)
    {
        this.reprezentation.AddElementChild(element);
    }

    ReactOnClick()
    {
        this.canvas.ActivateNode(this);
    }

    FillNodeWithInput(element, type)
    {
        this.input = new NodeInput(this, type);
        element.AddElementChild(this.input);
    }


    FillNodeWithOutput(element, type)
    {
        this.output = new NodeOutput(this, type)
        element.AddElementChild(this.output);
    }

    SetNodeSelected()
    {
        this.nodeHeader.SetSelectedColor();
    }

    SetNodeDeselected()
    {
        this.nodeHeader.SetUnselectedColor();

    }

    InformCanvasAboutInputMarking(type)
    {
        this.canvas.MarkNodeInputs(type);
    }

    InformCanvasAboutInputUnMarking(type)
    {
        this.canvas.UnMarkNodeInputs(type);
    }



    MarkHeaderInput()
    {
        this.input.Mark();
    }

    UnMarkHeaderInput()
    {
        this.input.UnMark();
    }

    SetCommentary(commentary)
    {
        this.commentary = commentary;
    }

    GetCommentary()
    {
        return this.commentary;
    }

    GetCanvas()
    {
        return this.canvas;
    }

    GetName()
    {
        return this.name;
    }

    GetReprezentation()
    {
        return this.reprezentation;
    }

    GetSerialized()
    {
        return "Serialized";
    }

    GetInput()
    {
        return this.input;
    }

    GetOutput()
    {
        return this.output;
    }

    GetNodeBody(){
        return this.reprezentation;
    }

    GetHeaderInput()
    {
        return this.input;
    }

    GetHeaderOutput()
    {
        return this.output;
    }



}
