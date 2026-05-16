document.getElementById("passFrom").addEventListener("submit",(event) => {
    event.preventDefault();
    const webSiteName = document.getElementById("siteName").value.trim();
    const userName = document.getElementById("userName").value.trim();
    const password = document.getElementById("password").value;

    const packet = {
        websiteName: webSiteName,
        UserName: userName,
        Passsword:password,

    };
    saveToLocalStorage(packet);
});

document.getElementById("passFrom").addEventListener("reset",(event) => {
    document.getElementById("siteName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";

});

function saveTOLocalStorage(packet) {
    const oldData = JSON.parse(localStorage.getItem("Passwords"));

    const newData = oldData.push(packet);
    console.log(newData);

    const packetInString = JSON.stringify(newData);

    localStorage.setItem("Passwords",packetInString);

}