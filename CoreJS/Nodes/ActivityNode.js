

class ActivityNode extends BasicNode{

    constructor(activityNodeName)
    {
        super("Activity");
        this.activityNodeName = activityNodeName;
        //this.baseNode = new BasicNode();
        //this.baseNode.name = "Activity";

        var base = this.getReprezentation();//this.baseNode.GetReprezentation()
        var nodeSecondHeader = document.createElement("div");

        nodeSecondHeader.classList.add("nodeHeader");
        nodeSecondHeader.cursor = "default";
        nodeSecondHeader.innerText = this.nodename;
        nodeSecondHeader.style.backgroundColor = "#444444";
        base.appendChild(nodeSecondHeader);
        base.appendChild(this.CreateActivityState());

    }

    CreateActivityState()
    {
        var tmp = document.createElement("div");
        tmp.classList.add("nodeHeader");
        tmp.innerText = "Waiting";
        tmp.style.backgroundColor = "orange";

        return tmp;
    }

    getSerialized()
    {
        return "Serialized";
    }



    getReprezentation()
    {
        return this.reprezentation;

    }

}