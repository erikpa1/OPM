class NodeInputLabel extends NodeElement{

    constructor(){
        super();
        this.reprezentation = document.createElement("input");
        this.reprezentation.classList.add("form-control");
    }

    getReprezentation()
    {
        return this.reprezentation;
    }


}