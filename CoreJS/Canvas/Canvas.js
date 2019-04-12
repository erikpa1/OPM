

var allCanvas = [];
var activeCanvas = null;


class Canvas
{
    constructor()
    {
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

        this.OverrideRightClick();

        var tmpnode = new BasicNode("Ahoj", this);
        var tmpActivityNode = new ActivityNode("Tvorba modelu", this);

        $("body")[0].appendChild(GetTopNav());

        this.AddNodeToCanvas(tmpnode.GetReprezentation());
        this.AddNodeToCanvas(tmpActivityNode.GetReprezentation());



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
        this.activeNode.SetNodeDeselected();
        this.activeNode = null;
        this.activeNodes.clear;
    }



    AddNodeToCanvas(node)
    {
        $("body")[0].appendChild(node.GetReprezentation());
        
    }

    GetMultiSelectionState()
    {
        return multiselectionModeActive;
    }

    SerializeProject()
    {

        var outputCollector = "";
        var index = 0;
        for (index = 0; index < this.allNodes.length; i++)
        {
            outputCollector += this.allNodes[index].GetSerialized();
        }
        this.ajax.SetData(outputCollector);
        //this.ajax.Send();
    }

}



