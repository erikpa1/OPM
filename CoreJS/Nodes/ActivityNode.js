

class ActivityNode extends BasicNode{

    constructor(activityNodeName)
    {
        super("Activity");

        this.activityNodeName = activityNodeName;

        var nodeSecondHeader = new NodeHeader("Waiting");

        super.GetReprezentation().AddElementChild(nodeSecondHeader);
        //super.GetReprezentation().AddElementChild(this.CreateActivityState());

    }

    CreateActivityState()
    {
        var tmp = document.createElement("div");
        tmp.classList.add("nodeHeader");
        tmp.innerText = "Waiting";
        tmp.style.backgroundColor = "orange";

        return tmp;
    }

    GetSerialized()
    {
        return "Serialized";
    }



    GetReprezentation()
    {
        return this.reprezentation;

    }

}