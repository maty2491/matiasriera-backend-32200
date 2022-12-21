const socket = io();
const messageForm = document.getElementById("messageForm")
const usernameInput = document.getElementById("usernameInput")
const messageInput = document.getElementById("messageInput")
const messagesPool = document.getElementById("messagesPool")

const productForm = document.getElementById("productForm")
const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const imgInput = document.getElementById("imgInput")
const productsContainer = document.getElementById("productsContainer")

const sendProduct = (product) => {
    socket.emit("client:product", product)
}

const renderProduct = (productData) => {
    const html = productData.map((productInfo) => {
        if (productData) {
            return `
               <div class="container">
<table class="table align-middle mb-0 bg-white">
    <thead class="bg-light">
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
        </tr>
    </thead>   
    <tbody>        
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <div class="ms-3">
                        <p class="fw-bold mb-1">${productInfo.title}</p>

                    </div>
                </div>
            </td>
            <td>
                <p class="fw-normal mb-1">
                    $ ${productInfo.price}
                </p>
            </td>
            <td>
                <img src="${productInfo.thumbnail}" alt="" style="width: 45px; height: 45px" class="rounded-circle" />
            </td>     
        </tr>
    </tbody>
</table>
</div>`
        } else {
            `<h1 class="text-center">No hay productos cargados</h1>`
        }
    });
    productsContainer.innerHTML = html
};

const formProductsHandler = (event) => {
    event.preventDefault()

    const productInfo = {
        title: productInput.value,
        thumbnail: imgInput.value,
        price: priceInput.value,
    }
    sendProduct(productInfo)

}

productForm.addEventListener("submit", formProductsHandler)

socket.on("server:product", renderProduct)

const sendMessage = async (messageInfo) => {
    socket.emit("client:message", messageInfo)
};

const renderMessage = (messagesData) => {
    const html = messagesData.map((messageInfo) => {
        return `<div> <strong style="color: blue">${messageInfo.username}</strong><span style="color: brown">[${messageInfo.time}]:</span> <em style="color: green; font-style: italic">${messageInfo.message}</em> </div>`
    })

    messagesPool.innerHTML = html.join(" ")
};

const submitHandler = (event) => {
    event.preventDefault()

    const messageInfo = {
        username: usernameInput.value,
        message: messageInput.value,
    };

    sendMessage(messageInfo)

    messageInput.value = ""
    usernameInput.readOnly = true
};

messageForm.addEventListener("submit", submitHandler)

socket.on("server:message", renderMessage);