

class NodeHeader extends NodeElement{

    constructor(name)
    {
        super();
        super.getReprezentation().classList.add("nodeHeader");
        super.getReprezentation().style.left = 250;
        super.getReprezentation().style.top = 250;
        super.getReprezentation().innerText = name;

    }

}