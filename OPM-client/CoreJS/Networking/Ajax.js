class Ajax {

    constructor(){

    }

    SetAsPost()
    {
        this.type = 'POST';
    }

    SetData(data)
    {
        this.data = data;
    }

    SetUrl(url)
    {
        this.url = url;
    }

    SetReciever(reciever)
    {
        this.reciever = reciever;
    }

    Send()
    {
        var reciever = this.reciever;
        $.ajax({
            url: this.url,
            type: this.type,
            data: this.data,
            success : function (data) {
                reciever(data);

            }
        })
    }




}