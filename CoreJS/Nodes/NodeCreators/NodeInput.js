class NodeInput extends NodeIO
{
    constructor(parent, type)
    {
        super(parent, type);
        super.SetOnHoverCursorPointer();
        super.AddElementClass("w3-display-topleft");
        super.AddElementClass("nodeInput");
        super.SetOnClickReactor(this);
    }


    ReactOnClick()
    {
        if (super.IsMarked())
        {
            if (SELECTED_OUTPUT != null)
            {
                super.SetConnectedIO(SELECTED_OUTPUT);
                SELECTED_OUTPUT.CreateConnection(this);
                SELECTED_OUTPUT.Deselect();
                SELECTED_OUTPUT.UpdateLine();
                SELECTED_OUTPUT = null;
                super.GetNodeParent().InformCanvasAboutInputUnMarking(this.type);
            }
        }
    }






}