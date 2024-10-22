// Initial data for friends
const messages = {
    miada: `عزيزتي ميادة،

أكتب إليك هذه الرسالة وكلي شغف للتعبير عن مدى حبي لك واعتزازي بصداقتنا. لقد كنت دائمًا أكثر من مجرد صديقة بالنسبة لي؛ كنتِ أختًا وصديقة ورفيقة في كل اللحظات، سواء كانت سعيدة أو صعبة.

أحبك كثيرًا، مع خالص حبي،
[حبيبه عماد]`,

    marwa: `عزيزتي مروة،

أكتب لكِ هذه الرسالة لأعبر لكِ عن مدى حبي وتقديري لك.
أحبك كثيرًا، مع كل حبي،
[حبيبه عماد]`,

    menna: `عزيزتي منة،

أكتب لكِ هذه الرسالة لأعبّر لكِ عن مشاعري تجاهك.
أحبك من أعماق قلبي،
[حبيبه عماد]`,

    nada: `عزيزتي ندى،

أكتب لكِ هذه الرسالة لأعبّر عن مدى حبي لكِ واعتزازي بصداقتنا.
أحبك كثيرًا،
[حبيبه عماد]`,

    zahra: `عزيزتي زهرة،

أكتب لكِ هذه الرسالة لأعبّر عن حبي العميق لكِ.
أحبك كثيرًا،
[حبيبه عماد]`,

    nariman: `عزيزتي ناريمان،

أكتب إليكِ هذه الرسالة لأعبّر عن مشاعري العميقة تجاهك.
أحبك كثيرًا، مع خالص حبي،
[حبيبه عماد]`
};

// Show main page after clicking start button
document.getElementById('start-btn').addEventListener('click', function () {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
});

// Add pop-up animation for the message
document.querySelectorAll('.friend-btn').forEach(button => {
    button.addEventListener('click', function () {
        const messageContainer = document.getElementById('message-container');
        const message = document.getElementById('message');
        const friend = this.getAttribute('data-friend');

        // Set the message content
        message.textContent = messages[friend];

        // Pop-up animation
        messageContainer.classList.remove('inactive');
        messageContainer.classList.add('active');

        // Hide the message container after 3 seconds
        setTimeout(() => {
            messageContainer.classList.remove('active');
            messageContainer.classList.add('inactive');
        }, 3000);  // Adjust time as needed
    });
});