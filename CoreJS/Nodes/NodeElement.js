class NodeElement
{
    constructor()
    {
        this.reprezentation = document.createElement("DIV");
        this.parent = null;
        this.onClickReactor = null;
        this.onRightClickReactor = null;

        this.reprezentation.onclick = this.ReactOnClick;
    }

    SetOnClickReator(reactor)
    {
        this.onClickReactor = reactor;
    }

    ReactOnClick()
    {
        this.onClickReactor.ReactOnClick();
    }

    SetOnRightClickReactor(reactor)
    {

    }

    SetElementInnerName(name)
    {
        this.reprezentation.innerText = name;
    }

    GetElementInnerText()
    {
        return this.reprezentation.innerText;
    }

    AddElementClass(elementClass)
    {
        this.reprezentation.classList.add(elementClass);
    }

    SetOnHoverCursorPointer()
    {
        $(this.reprezentation).css('cursor', 'pointer');
    }

    GetReprezentation()
    {
        return this.reprezentation;
    }

    SetNodeParent(parent)
    {
        this.parent = parent;
    }

    GetNodeParent()
    {
        return this.parent;
    }

    SetBackgroundColor(color)
    {
        this.reprezentation.style.backgroundColor = color;
    }








}