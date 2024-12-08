<template>
<div class="container">
<h1>Nhìn gì ?</h1>
<div class="application" >
    <div class="background" v-if="huh">
        <div class="img">
            <img src="../assets/image/fuck.png" alt="Random Image">
        </div>
    </div>
</div>
<form>
    <button type="submit" id="button-submit" @click.prevent="huhuhuhuhuhu">Nhấn đi cu</button>
</form>

</div>
</template>

<script>
export default{
    name: 'huhCaiqq',
    data(){
        return{
            huh: false,
            // pathImg: require(''),
        }
    },
    mounted(){
        document.title = 'Nhìn qq';
    },
methods: {
    huhuhuhuhuhu(){
        this.huh = true;
        
        this.createRandomPopup();
    },
    createRandomPopup(){
        const popup = document.createElement('div');
        popup.classList.add('background');
        popup.classList.add('img');

        // Tạo phần tử img và thêm vào
        const image = document.createElement('img');
        image.src = require('@/assets/image/fuck.png');  // Đảm bảo đường dẫn đúng
        image.alt = 'Random Image';  // Thêm alt text cho hình ảnh
        popup.appendChild(image);  // Thêm img vào popup
        
        document.body.appendChild(popup);

        // Vị trí ngẫu nhiên trên màn hình
        const x = Math.random() * (window.innerWidth - 300); // Trừ đi kích thước của background để tránh vượt ra ngoài màn hình
        const y = Math.random() * (window.innerHeight - 300); // Tương tự như trên 
        
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;

        // Hiển thị phần tử
        setTimeout(() => {
            popup.classList.add('show');
        }, 10); 

        // Tạo phần tử mới mỗi 1 giây mà không ẩn phần tử trước đó
        setTimeout(() => {
            this.createRandomPopup();
        }, 500);
    }
}
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background {
    width: 300px;
    height: 300px;
    background: #aa29d9;
    box-shadow: 6px 6px 6px 6px rgba(0.5, 0.5, 0.5, 0.5);
    position: absolute; /* Đảm bảo phần tử có thể di chuyển tự do */
    opacity: 0; /* Bắt đầu ẩn */
    transition: opacity 0.5s ease; /* Tạo hiệu ứng mờ dần */
}

.background.show {
    opacity: 1; /* Khi thêm class show, phần tử sẽ xuất hiện */
}

.img img {
    width: 100%;
    height: 100%;
}

#button-submit {
    margin-top: 30px;
    padding: 30px 80px;
    font-size: 16px;
    color: white;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

#button-submit:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
}

#button-submit:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transform: translateY(2px);
}

.application {
    margin: 0 auto;
    padding: 30px 30px;
}

@keyframes appear {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style>
