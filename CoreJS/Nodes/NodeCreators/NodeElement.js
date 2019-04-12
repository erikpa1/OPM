class NodeElement
{
    constructor()
    {
        this.reprezentation = document.createElement("DIV");
        this.parent = null;
        this.onClickReactor = null;
        this.onRightClickReactor = null;
    }

    SetOnClickReator(reactor)
    {
        this.onClickReactor = reactor;
        this.reprezentation.onclick = this.ReactOnClick.call();
    }

    ReactOnClick()
    {
        if (this.onClickReactor != null) {                   
            this.onClickReactor.ReactOnClick();              
        }                                                    
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

    AddElementChild(node)
    {
        this.reprezentation.appendChild(node.GetReprezentation());
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

    ParentMoved()
    {

    }








}