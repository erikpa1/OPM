class NodeCommentary extends GuiElement
{
    constructor(parent)
    {
        super();
        super.SetNodeParent(parent);
        super.AddElementClass("form-group");
        this.textArea = document.createElement("TEXTAREA");
        this.textArea.classList.add("form-control");
        this.textArea.classList.add("nodeCommentary");
        super.GetReprezentation().appendChild(this.textArea);
    }

    SetCommentaryText(text)
    {
        this.textArea.innerText = text;
    }




}