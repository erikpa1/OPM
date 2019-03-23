
var _topnav = null;
var _topnav_container = null;
var _topnav_header = null;
var _topnav_list = null;

function GetTopNav() {

    if (_topnav == null)
    {
        _topnav = document.createElement("NAV");
        _topnav.classList.add("navbar");
        _topnav.classList.add("navbar-inverse");
        _topnav.zIndex = 2;

        CreateTopNavContainer();
    }
    return _topnav;
}


function CreateTopNavContainer()
{
    if(_topnav_container == null)
    {
        _topnav_container = document.createElement("DIV");
        _topnav_container.classList.add("container-fluid");
        _topnav.appendChild(_topnav_container);

        CreateTopNavHeader();
        CreateTopNavList();
    }
}

function CreateTopNavHeader()
{
    if(_topnav_header == null)
    {
        _topnav_header = document.createElement("DIV");
        _topnav_header.classList.add("navbar-header");

        var ahref = document.createElement("A");
        ahref.classList.add("navbar-brand");
        ahref.href = "#";
        ahref.innerText = "Open Project Manager";

        _topnav_container.appendChild(ahref);
    }
}

function CreateTopNavList()
{
    if(_topnav_list == null)
    {
        _topnav_list = document.createElement("UL");
        _topnav_list.classList.add("nav");
        _topnav_list.classList.add("navbar-nav");

        var home = CreateTopNavListButton(["Home" , null]);
        home.classList.add("active");

        var newFile = CreateTopNavDropButton("File");
        var nodeLibrary = CreateTopNavDropButton("Node library");
        var settings = CreateTopNavDropButton("Settings");
        var statistics = CreateTopNavDropButton("Statistics");

        _topnav_list.appendChild(home);
        _topnav_list.appendChild(newFile);
        _topnav_list.appendChild(nodeLibrary);
        _topnav_list.appendChild(settings);
        _topnav_list.appendChild(statistics);

        //Inicializacia new file
        FillTopNavDropButton(newFile, CreateTopNavListButton(["New file", null]));
        FillTopNavDropButton(newFile, CreateTopNavListButton(["Open existing", null]));
        FillTopNavDropButton(newFile, CreateTopNavListButton(["Open recent", null]));
        FillTopNavDropButton(newFile, CreateTopNavListButton(["Save", null]));
        FillTopNavDropButton(newFile, CreateTopNavListButton(["Save as", null]));

        //Initialization of node library
        FillTopNavDropButton(nodeLibrary, CreateTopNavListButton(["Label node", null]));
        FillTopNavDropButton(nodeLibrary, CreateTopNavListButton(["Commentary node", null]));
        //FillTopNavDropButton(nodeLibrary, CreateTopNavListButton(["Activity node", activeCanvas.AddNodeToCanvas(null), "ActivityNode"]));

        //Inicializacia settings
        FillTopNavDropButton(settings, CreateTopNavListButton(["Show pallete", null]));
        FillTopNavDropButton(settings, CreateTopNavListButton(["Show node info", null]));

        //Inicializacia statistiky
        FillTopNavDropButton(statistics, CreateTopNavListButton(["Project overwiew", null]));

        _topnav_container.appendChild(_topnav_list);

    }
}

function CreateTopNavListButton(nameandfunction)
{
    var tmp = document.createElement("LI");
    var ahref = document.createElement("A");
    ahref.innerText = nameandfunction[0];
    ahref.onclick = function ()
    {
        nameandfunction[1](nameandfunction[3]);
    }
    tmp.appendChild(ahref);

    return tmp;

}


function CreateTopNavDropButton(name)
{
    var tmp = document.createElement("LI");
    var ahref = document.createElement("A");
    var caret = document.createElement("SPAN");
    var ul = document.createElement("UL");

    tmp.classList.add("dropdown");
    caret.classList.add("caret");
    ul.classList.add("dropdown-menu");

    ahref.classList.add("dropdown-toggle");
    ahref.setAttribute("data-toggle", "dropdown");
    ahref.href = "#";
    ahref.innerText = name;
    ahref.appendChild(caret);

    tmp.appendChild(ahref);
    tmp.appendChild(ul);

    return tmp;
}

function FillTopNavDropButton(parent, child)
{
    parent.children[1].appendChild(child);
}


