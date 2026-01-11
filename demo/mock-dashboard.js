document.addEventListener("DOMContentLoaded", () => {
    const log = document.getElementById("activity-log");

    const sample = [
        "Order #1021 completed",
        "Inventory low: Item A",
        "Terminal 3 synced",
        "Order #1022 refunded",
        "New user added: Manager"
    ];

    sample.forEach(item => {
        const div = document.createElement("div");
        div.className = "log-item";
        div.textContent = item;
        log.appendChild(div);
    });
});
