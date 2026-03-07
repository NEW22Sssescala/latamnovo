document.addEventListener('DOMContentLoaded', () => {
    // Set dynamic date in alert bar
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    today.setDate(today.getDate() + 1); // Add +1 day
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    dateElement.textContent = `${day}/${month}/${year}`;

    // Comments data
    const comments = [
        {
            name: "Eduardo Cuéllar",
            text: "Menos mal que vi el video hasta el final. Estoy demasiado feliz. Muchas gracias Dra. por haberlo descubierto, hice la prueba y en dos dias ya volvi a estar duro, ¡nunca más la pastilla azul!",
            likes: 18,
            time: "21 min",
            profilePic: "images/profile_eduardo.png"
        },
        {
            name: "Roberto Belmonte",
            text: "La cosa funciona, amigo",
            likes: 7,
            time: "1 min",
            profilePic: "images/profile_2_1769046717513.png"
        },
        {
            name: "Pedro Pablo",
            text: "Al principio dudaba mucho, sobre todo porque ya había intentado de todo antes. ¡Pero aun así decidí darle una oportunidad y quedé impresionado!",
            likes: 219,
            time: "3 h",
            profilePic: "images/profile_3_1769046730756.png"
        },
        {
            name: "Lucas Almeida",
            text: "Queria saber si funcionaba de verdad y ahora viendo todos estos comentarios positivos, ya sé la respuesta. ¡¡Muchas gracias gente!!",
            likes: 24,
            time: "51 min",
            profilePic: "images/profile_5_1769046757693.png"
        },
        {
            name: "Marcelo Santos",
            text: "¡Estoy sorprendido de cómo funciona este truco! Dudaba que realmente fuera a funcionar, lo estoy usando hace 30 días y volví a hacerlo 2 veces por día, imagina cuando cumpla 3 meses de uso, mi mujer que me espere.",
            likes: 34,
            time: "40 min",
            profilePic: "images/profile_6.png"
        },
        {
            name: "Guillermo Mota",
            text: "Yo realmente necesitaba este truco para salvar mi matrimonio, no sabía qué más hacer. El video demora un poco, pero después de que se revela el truco me quedé sorprendido pq funciona de verdad. ¡Gracias Doctora!",
            likes: 102,
            time: "45 min",
            profilePic: "images/profile_7.png"
        },
        {
            name: "Rodrigo Meneses",
            text: "Después de cumplir 56 años, empecé a sufrir con la disfunción, lo que me hacía quedar siempre a media asta, sin hablar de mi libido que estaba por el suelo... Ahora, después de usar su solución, ¡todo eso acabó! Dejé de pasar vergüenza. Realmente funciona, lo recomiendo mucho.",
            likes: 23,
            time: "44 min",
            profilePic: "images/profile_8.png"
        },
        {
            name: "Bruno Martinez",
            text: "¡Deberías mostrar este truco a todo el mundo! ¡Funciona de verdad!",
            likes: 5,
            time: "2 min",
            profilePic: "images/profile_9.png"
        },
        {
            name: "Emanuel Silva",
            text: "Yo sufría quedándome solo a media asta, no llegaba a fallar, pero mi esposa notaba que había algo raro, llegó a pelear conmigo pensando que la estaba traicionando. Pero era solo que el amiguito no subía. ¡Pero ahora no hay quien me pare, ¡me volví un adolescente de nuevo!",
            likes: 28,
            time: "6 h",
            profilePic: "images/profile_10.png"
        },
        {
            name: "Walter Morales",
            text: "No consigo dejarlo rigido hace más de 8 años, ¿será que funciona?",
            likes: 16,
            time: "22 min",
            profilePic: "images/profile_1_1769046703941.png",
            replies: [
                {
                    name: "Celia Ibáñez",
                    text: "Walter la cosa se pone como concreto jejeje. Este método fue el único intento que me funcionó. ¡Puedes probar, vas a ver cómo funciona!",
                    likes: 11,
                    time: "12 min",
                    profilePic: "images/profile_4_1769046743981.png"
                }
            ]
        },
        {
            name: "Diego Silva",
            text: "Ya hacía tres años que no conseguía levantar el mástil, intenté de todo, gel, masajes y nada funcionaba. Solo este método consiguió salvarme, ¡¡solo no lo uses mucho si no no habrá quien baje al muchacho!!",
            likes: 18,
            time: "17 min",
            profilePic: "images/profile_2_1769046717513.png"
        }
    ];

    const commentsList = document.getElementById('comments-list');

    function createCommentHTML(comment) {
        let repliesHTML = '';
        if (comment.replies) {
            repliesHTML = `<div class="replies">
                ${comment.replies.map(reply => createCommentHTML(reply)).join('')}
            </div>`;
        }

        return `
            <div class="comment-item">
                <div class="profile-pic">
                    <img src="${comment.profilePic}" alt="${comment.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="comment-content-wrapper">
                    <div class="comment-bubble">
                        <span class="user-name">${comment.name}</span>
                        <p class="comment-text">${comment.text}</p>
                    </div>
                    <div class="comment-actions">
                        <span>Me gusta</span>
                        <span>Responder</span>
                        <span>${comment.time}</span>
                        ${comment.likes > 0 ? `
                        <div class="like-count">
                            <div class="like-icon">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>
                            </div>
                            ${comment.likes}
                        </div>
                        ` : ''}
                    </div>
                    ${repliesHTML}
                </div>
            </div>
        `;
    }

    commentsList.innerHTML = comments.map(comment => createCommentHTML(comment)).join('');

    // --- CTA DELAY LOGIC ---
    const SECONDS_TO_WAIT = 401; // 6 minutes and 41 seconds
    const ctaContainer = document.getElementById('cta-container');

    if (ctaContainer) {
        setTimeout(() => {
            ctaContainer.classList.remove('hidden');
            // Scroll to the button if needed, or just reveal it
        }, SECONDS_TO_WAIT * 1000);
    }
});
