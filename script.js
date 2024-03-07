function showGreeting() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
        var randomGreetings = [
            "Chúc " + name + " 8/3 vui vẻ nha !!! 😊",
            "Chúc " + name + " luôn vui vẻ và gặp nhiều may mắn ☘️",
            "Hy vọng " + name + " có một ngày 8/3 tuyệt vời! 🙆‍♂️",
            "Chúc " + name + " ngày càng xinh đẹp, thành công nha 🌠",
            "Chúc " + name + " kì này lụm học bổng 😆",
            "Chúc " + name + " có một ngày 8/3 thật vui tươi, tràn ngập hạnh phúc nhé 😁 ",
            "Chúc " + name + " nhận được nhiều quà, nhiều hoa nhiều lời chúc của phái nam \n trong ngày đặc biệt hôm nay nha 🌹 "
        ];
        var randomIndex = Math.floor(Math.random() * randomGreetings.length);
        var greeting = randomGreetings[randomIndex];

        var greetingElement = document.getElementById("greeting");
        greetingElement.innerHTML = "";
        for (let i = 0; i < greeting.length; i++) {
            var span = document.createElement("span");
            if (greeting[i] === '\n') {
                greetingElement.appendChild(document.createElement("br")); // Xuống dòng
            } else {
                span.textContent = greeting[i];
                span.classList.add("fall-in");
                greetingElement.appendChild(span);
            }
        }

    } else {
        alert("Vui lòng nhập tên của bạn!");
    }
}
