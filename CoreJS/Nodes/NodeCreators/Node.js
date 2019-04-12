


class BasicNode extends React.Component
{
    constructor(name, canvas)
    {
        super();

        this.name = name;
        this.canvas = canvas;
        this.nodeHeader = new NodeHeader(name, this);
        this.input = null;
        this.output = null;

        this.FillNodeWithInput(this.nodeHeader);
        this.FillNodeWithOutput(this.nodeHeader);

        this.reprezentation = new NodeBody();
        this.reprezentation.AddElementChild(this.nodeHeader);

        dragElement(this.reprezentation.GetReprezentation());
        scaleElement(this.reprezentation.GetReprezentation());

        this.output.CreateConnection(this.input);

    }

    ReactOnClick()
    {
        this.canvas.ActivateNode(this);
    }

    FillNodeWithInput(element)
    {
        this.input = new NodeInput();
        element.AddElementChild(this.input);
    }


    FillNodeWithOutput(element)
    {
        this.output = new NodeOutput()
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



}
