

var allCanvas = null;
var activeCanvas = null;

class Canvas
{
    constructor()
    {
        this.allNodes = [];
        this.author = "Default";

        this.ajax = new Ajax();
        this.ajax.SetAsPost();
        this.ajax.SetUrl('/CanvasSerializator');
        //this.ajax.SetReciever(this.RecieveAjaxMessage);


        this.InitCanvas();
        activeCanvas = this;
    }

    InitCanvas()
    {

        this.OverrideRightClick();

        var tmpnode = new BasicNode("Ahoj");
        var tmpActivityNode = new ActivityNode("Tvorba modelu");

        $("body")[0].appendChild(GetTopNav());

        this.AddNodeToCanvas(tmpnode.getReprezentation());
        this.AddNodeToCanvas(tmpActivityNode.getReprezentation());

    }

    RecieveAjaxMessage(data)
    {

    }

    AddNodeToCanvas(nodename)
    {
        $("body")[0].appendChild(CreateActivityNode("Activity")[0]);
        alert(nodename);
    }

    OverrideRightClick()
    {

    }

    AddNodeToCanvas(node)
    {
        $("body")[0].appendChild(node);
    }

    SerializeProject()
    {

        var outputCollector = "";
        var index = 0;
        for (index = 0; index < this.allNodes.length; i++)
        {
            outputCollector += this.allNodes[index].getSerialized();
        }

        this.ajax.SetData(outputCollector);
        this.ajax.Send();

    }

}



