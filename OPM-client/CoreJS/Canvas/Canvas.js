

var allCanvas = [];
var activeCanvas = null;


class Canvas extends GuiElement
{
    constructor()
    {
        super();
        super.SetReprezentation($("body")[0]);
        super.SetOnClickReactor(this);

        this.allNodes = [];
        this.author = "Default";

        this.activeNode = null;
        this.activeNodes = [];

        this.multiselectionModeActive = false;

        this.ajax = new Ajax();
        this.ajax.SetAsPost();
        this.ajax.SetUrl('/CanvasSerializator');
        this.ajax.SetReciever(this.RecieveAjaxMessage);

        this.InitCanvas();
        activeCanvas = this;
        //allCanvas.add(this);
    }

    InitCanvas()
    {
        super.GetReprezentation().appendChild(GetTopNav());
        this.OverrideRightClick();
        this.AddNodeToCanvas(new BasicNode("BaseNode", this));
        this.AddNodeToCanvas(new ActivityNode("Tvorba modelu", this));
    }

    ReactOnClick()
    {
        this.DeactivateNode(this.activeNode);
    }

    RecieveAjaxMessage(data)
    {

    }

    OverrideRightClick()
    {

    }

    ActivateNode(node)
    {
        if (this.multiselectionModeActive == false)
        {
            if (this.activeNode != null)
            {
                this.activeNode.SetNodeDeselected();
            }
            this.activeNode = node;
            this.activeNode.SetNodeSelected();
        } else {
            node.SetNodeSelected();
            this.activeNodes.add(node);
        }
    }

    DeactivateNode(node)
    {
        if (node != null)
        {
            this.activeNode.SetNodeDeselected();
            this.activeNode = null;
        }
    }

    AddNodeToCanvas(node)
    {
      this.allNodes.push(node);
      super.AddElementChild(node.GetReprezentation());
    }

    MarkNodeInputs(inputType)
    {
        switch (inputType) {
            case "Header":
                this.allNodes.forEach((element) => {
                    element.MarkHeaderInput();
                });
                break;
        }
    }

    UnMarkNodeInputs(inputType)
    {
        switch (inputType) {
            case "Header":
                this.allNodes.forEach((element) => {
                    element.UnMarkHeaderInput();
                });
                break;
        }
    }



    GetMultiSelectionState()
    {
        return multiselectionModeActive;
    }

    SerializeProject()
    {

        var outputCollector = "";
        var index = 0;
        for (index = 0; index < this.allNodes.length; index++)
        {
            outputCollector += this.allNodes[index].GetSerialized();
        }
        this.ajax.SetData(outputCollector);
        //this.ajax.Send();
    }

}



