let myname = prompt("Enter Your Name");

let sendMessage = () =>{
    let message = document.getElementById("messaage").value;
    firebase.database().ref("messages").push().set({
        "sender":myname,
        "message":message
    });
    return false;
}
firebase.database().ref("messages").on("child_added",function(snapshot){
    let html = "";
    html += "<li id='message-"+snapshot.key+"' class='mylist mycontainer'>";
    if(snapshot.val().sender == myname){
        html += "<button data-id  = '"+snapshot.key+"' onclick= 'deleteMessage(this);'>";
        html += "Delete";
        html += "</button>";
    }
    html += snapshot.val().sender + ":" + snapshot.val().message ;
    html += "</li>";
    document.getElementById("messages").innerHTML += html;
});
let deleteMessage = (self) =>{
    let messageid = self.getAttribute("data-id");
    firebase.database().ref("messages").child(messageid).remove();
}
firebase.database().ref("messages").on("child_removed",function(snapshot){
    document.getElementById("message-"+snapshot.key).innerHTML="This message was deleted";
});
