

class ActivityNode extends BasicNode{

    constructor(activityNodeName, parent)
    {
        super("Activity", parent);
        this.nodeSecondHeader = new NodeHeader("Waiting");
        this.nodeCommentary = new NodeCommentary(this);
        super.GetNodeBody().AddElementChild(this.nodeSecondHeader);
        super.GetNodeBody().AddElementChild(this.nodeCommentary);
    }

    GetSerialized()
    {
        var start = "<ActivityNode>";
        var middle = "";
        var end = "</ActivityNode>";
        return start + middle + end;
    }


    GetReprezentation()
    {
        return this.reprezentation;

    }

}