const socket = io()
const messageForm = document.getElementById('messageForm')
const usernameInput = document.getElementById('usernameInput')
const messageInput = document.getElementById('messageInput')
const messagesPool = document.getElementById('messagesPool')
const date = new Date().toLocaleString("es-AR");

const sendMessage = (messageInfo) => {
    socket.emit('client:message', messageInfo)
}

const renderMessage = (messagesData) => {
    const html = messagesData.map(messageInfo => {
        return `
        <div>
            <strong>${messageInfo.username}(${date}): </strong>
            <em>${messageInfo.message}</em>
        </div> `
    }).join(' ')

    messagesPool.innerHTML = html
}

const submitHandler = (e) => {
    e.preventDefault()
    const messageInfo = {
        username: usernameInput.value,
        message: messageInput.value
    }

    sendMessage(messageInfo)

    messageInfo.value = ""
    usernameInput.readOnly=true
}

messageForm.addEventListener('submit', submitHandler)

socket.on('server:message', renderMessage)
