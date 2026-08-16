// const ticketAudio = new Audio("/sounds/ticket-call.mp3");

// ticketAudio.preload = "auto";

// export function playTicketSound() {
//     ticketAudio.currentTime = 0;

//     return ticketAudio.play();
// }




const ticketAudio = new Audio("/sounds/ticket-call.mp3");

ticketAudio.preload = "auto";
ticketAudio.loop = true;


export function playTicketSound() {

    ticketAudio.currentTime = 0;

    ticketAudio.play();

    document.addEventListener("click", stopTicketSound, { once: true });
    document.addEventListener("touchstart", stopTicketSound, { once: true });

}


function stopTicketSound() {

    ticketAudio.pause();
    ticketAudio.currentTime = 0;

}
