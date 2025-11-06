const sendForm = async ({name, phone}: { name: string; phone: string }) => {
    const botToken: string = '8229491656:AAEtqWMMQsMEnEEb2W6Uv_xMuAum3BsCLq8';
    const chatId: string = '326615047';

    const message = `📩 Новая заявка!\n<b>Имя:</b> ${name}\n<b>Телефон:</b> ${phone}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML',
            }),
        });

        if (!response.ok) {
            throw new Error('Ошибка отправки в Telegram');
        }
    } catch (error) {
        console.error('Не удалось отправить заявку:', error);
    }
};

export default sendForm;