

class NodeHeader extends NodeElement{

    constructor(name, parent)
    {
        super();
        super.SetNodeParent(parent);
        super.GetReprezentation().style.left = 250;
        super.GetReprezentation().style.top = 250;
        super.SetElementInnerName(name);
        super.AddElementClass("nodeHeader");
        super.SetOnClickReator(this);

    }

    ReactOnClick()
    {
        var parent = super.GetNodeParent();
        var canvas = parent.GetCanvas();
        canvas.ActivateNode(super.GetNodeParent());
    }

    SetUnselectedColor()
    {
        super.setElementColor("#222222")
    }

    SetSelectedColor()
    {
        super.setElementColor("#33333")
    }

}