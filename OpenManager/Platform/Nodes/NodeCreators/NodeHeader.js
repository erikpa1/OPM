

class NodeHeader extends GuiElement{

    constructor(name, parent)
    {
        super();
        super.SetNodeParent(parent);
        super.SetElementInnerName(name);
        super.AddElementClass("nodeHeader");
        super.SetOnClickReactor(parent);

    }

    SetUnselectedColor()
    {
        super.SetBackgroundColor("#222222")
    }

    SetSelectedColor()
    {
        super.SetBackgroundColor("#ff7900")
    }

}