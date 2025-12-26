function searchDestinations() {
    var input = document.getElementById("searchBar").value.toLowerCase();
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        var name = card.getAttribute("data-name").toLowerCase();
        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function toggleChatbot() {
    var chatbot = document.getElementById("chatbotContainer");
    if (chatbot.style.display === "none" || chatbot.style.display === "") {
        chatbot.style.display = "flex";
    } else {
        chatbot.style.display = "none";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    var input = document.getElementById("chatInput");
    var message = input.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    setTimeout(function () {
        var response = getAIResponse(message);
        addMessage(response, "bot");
    }, 500);
}

function addMessage(text, sender) {
    var messagesContainer = document.getElementById("chatMessages");
    var messageDiv = document.createElement("div");
    messageDiv.className =
        "message " + (sender === "bot" ? "bot-message" : "user-message");
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getAIResponse(message) {
    var lower = message.toLowerCase();

    if (lower.includes("tokyo") || lower.includes("japan")) {
        return "Tokyo, Japan costs ₹95,000 for an 8-day trip. Best time to visit is March–May or September–November.";
    } 
    else if (lower.includes("bali")) {
        return "Bali, Indonesia costs ₹65,000 for 5 days. Famous for beaches, temples, and nightlife.";
    } 
    else if (lower.includes("dubai")) {
        return "Dubai, UAE costs ₹75,000 for 5 days. Enjoy luxury shopping and desert safari. Best time: Nov–Mar.";
    } 
    else if (lower.includes("bangkok")) {
        return "Bangkok, Thailand costs ₹55,000 for 5 days. Known for street food and grand palaces.";
    } 
    else if (lower.includes("singapore")) {
        return "Singapore costs ₹70,000 for 4 days. Visit Marina Bay Sands and Gardens by the Bay.";
    } 
    else if (lower.includes("nepal") || lower.includes("kathmandu")) {
        return "Kathmandu, Nepal costs ₹45,000 for 5 days. Best time: Oct–Nov or Mar–Apr.";
    } 
    else if (lower.includes("cheap") || lower.includes("price")) {
        return "Our cheapest destination is Kathmandu (₹45,000), followed by Bangkok (₹55,000).";
    } 
    else if (lower.includes("book")) {
        return "To book a tour, please go to the destination page and click Book Now.";
    } 
    else if (lower.includes("visa")) {
        return "Most Asian countries offer visa-on-arrival or e-visa for Indian citizens.";
    } 
    else if (lower.includes("hello") || lower.includes("hi")) {
        return "Hello! How can I help you plan your Asia trip today?";
    } 
    else {
        return "I can help you with destinations, prices, booking, and travel tips.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var authBox = document.getElementById("authLinks");
    if (!authBox) return;

    if (localStorage.getItem("loggedIn") === "true") {
        var email = localStorage.getItem("userEmail") || "User";
        authBox.innerHTML =
            "<span style='margin-right:10px;'>Welcome, " +
            email +
            "</span><button onclick='logout()'>Logout</button>";
    } else {
        authBox.innerHTML =
            "<a href='login.html'>Login</a><a href='signup.html'>Sign Up</a>";
    }
});
