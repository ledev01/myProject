const $ =document.querySelector.bind(document);
const $$ =document.querySelectorAll.bind(document);

const playlist =$('#playlist')
const app = {
  currentIndex : 0,

songs: [
  {
    name:'Ánh nắng của anh',
    singer:'Đức Phúc',
    path:'./music/AnhNangCuaAnhFromchoEmDenNgayMaiOriginalMotionPictureSoundtrack-DucPhuc-16401876.mp3',
    image:'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg'
  },
  {
    name:'Ta còn yêu nhau',
    singer:'Đức Phúc',
    path:'./music/TaConYeuNhau-DucPhuc-16401878.mp3',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVr0BFvY5dvo66ONkAbO4QjxQzkW7utysIA&s'
  },
  {
    name:'I do',
    singer:'Đức Phúc',
    path:'./music/EmDongYIDo-DucPhucx911-9034315.mp3',
    image:'https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1676079729-duc-phuc-em-dong-y-1.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75'
  },
  {
    name:'Cứu vãn kịp không',
    singer:'Vương Anh Tú',
    path:'./music/CuuVanKipKhong-VuongAnhTu-7847996.mp3',
    image:'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/b/e/6/4/be64a8856566400dc3e2b959f252f363.jpg'
  },
  {
    name:'Không còn bình yên',
    singer:'Jun D',
    path:'./music/KhongConBinhYen-JuunDangDung-5327610.mp3',
    image:'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/1/9/19c75f0bfa09926ef4a67765dcc00f3b_1514276511.jpg'
  },
  {
    name:'Là bạn không thể yêu',
    singer:'Lou Hoàng',
    path:'./music/LaBanKhongTheYeu-LouHoang-13539361.mp3',
    image:'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/7/7/d/5/77d5c928b1a211cb3a929d6a6b6085e0.jpg'
  },
  {
    name:'1 phút',
    singer:'Andiez',
    path:'./music/1Phut-Andiez-7632303.mp3',
    image:'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/b/3/3/9/b339caaf9ac43b1621cc2a793666748d.jpg'
  },
  {
    name:'Only U',
    singer:'Hoàng Tôn',
    path:'./music/01xebrphka.mp3',
    image:'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/6/a/6ab8c2d7ca6b135580b8264b4e7eefa5_1460218198.jpg'
  },
  {
    name:'Hãy để anh yêu em',
    singer:'The men',
    path:'./music/HayDeAnhYeuEmLanNua-TheMen-8861230.mp3',
    image:'https://photo-resize-zmp3.zmdcdn.me/w256_r1x1_jpeg/cover/4/1/4/0/4140cf1c6421cca621284ed0e0ff9fba.jpg'
  },
  {
    name:'Định mệnh',
    singer:'Noo Phước Thịnh',
    path:'./music/DinhMenh-NooPhuocThinh-8440059.mp3',
    image:'https://cdn.vovlive.vn/2022/10/24/media.vov.vn-sites-default-files-styles-large-public-2022-10-_viechannel_-_photos_hoang_tu_rong_2.png.jpg'
  }
],
  render :function() {
     const htmls =this.songs.map((song,index) =>{
      return `
          <div class="flex justify-center ">
            <div id="song" class="bg-white sm:w-[270px] sm:px-2 w-[400px] px-2 h-12 shadow-lg rounded-md flex flex-row ${index === this.currentIndex ? 'active' :''}" data-index="${index}">
              <div class="flex flex-grow items-center">
                <img class=" h-10 w-10 rounded-full" src="${song.image}" alt="">
                <div class="flex flex-col ml-2 ">
                    <p id="musicname" class="font-semibold ${index === this.currentIndex ? 'active' :''}">${song.name}</p>
                    <p id="singername" class="text-gray-500 text-xs ${index === this.currentIndex ? 'active' :''}">${song.singer}</p>
                </div>
              </div>
              <div class="flex items-center">
                <img id="option" class="w-4" src="https://cdn-icons-png.flaticon.com/128/2311/2311523.png" alt="">
              </div>
            </div>
          </div>
      `
     })
    playlist.innerHTML = htmls.join('');
  },
  defineProperties:function(){
    Object.defineProperty(this,'currentSong',{
      get : function(){
        return this.songs[this.currentIndex]
      }
    })
  },
  handlerEvents:function(){
      //sang toi man hinh
      const switchButton = $("#switch");
      const dashboardColor = $("#dashboard");
      switchButton.onclick = ()=> {
      if(dashboardColor.style.backgroundColor === "silver" || dashboardColor.style.backgroundColor === ""){
      dashboardColor.style.backgroundColor="gray";
      switchButton.src="https://cdn-icons-png.flaticon.com/128/786/786385.png";
      }
      else if(dashboardColor.style.backgroundColor === "gray"){
      dashboardColor.style.backgroundColor="silver";
      switchButton.src="https://cdn-icons-png.flaticon.com/128/9343/9343893.png";
      }
      }

      //phong to cd
      const cd = $('#cd')
      const cdWidth = cd.offsetWidth
      document.onscroll=() =>{
      const scrollTop = window.scrollY;
      const newCdWidth = cdWidth -scrollTop
      // console.log(newCdWidth)
      cd.style.width = newCdWidth >0 ? newCdWidth + 'px' :0
      cd.style.opacity = newCdWidth / cdWidth
    }

    //play || pause :music
    const icon = document.getElementById('icon');
    const player = document.getElementById('player');
    const audio = document.getElementById('audio');
    const pause = document.getElementById('pause');
    const progress = document.getElementById('progress');
    const cd1 = document.getElementById('cd-thumb');

    // Tạo animation quay
    const cdquay = cd1.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ], {
      duration: 10000,
      iterations: Infinity
    });

    // Dừng quay ngay từ đầu
    cdquay.pause();

    pause.onclick = () => {
      if(icon.src === "https://cdn-icons-png.flaticon.com/128/260/260446.png"){
        icon.src = "https://cdn-icons-png.flaticon.com/128/4181/4181163.png";
        audio.play()
        player.classList.add('player')
        //cd quay khi an phat
        cdquay.play()
      }else if(icon.src === "https://cdn-icons-png.flaticon.com/128/4181/4181163.png"){
        icon.src = "https://cdn-icons-png.flaticon.com/128/260/260446.png";
        audio.pause()
        player.classList.remove('player')
        //cd dung quay khi tam dung
        cdquay.pause()
      }
    };
    //pre va next
    const next = $('#next');
    const pre = $('#pre');
    pre.onclick = () =>{
      if(this.isRandom){
        this.playRandomSong()
      }else{
        this.preSong();
      }
      if(icon.src === "https://cdn-icons-png.flaticon.com/128/260/260446.png")
      {
      audio.pause()
      progress.value = 0;
      }else if(icon.src = "https://cdn-icons-png.flaticon.com/128/4181/4181163.png")
      {
      audio.play()  
      }
      this.render()
      this.scrollToActiveSong()
    };
    next.onclick = () =>{
      if(this.isRandom){
        this.playRandomSong()
      }else{
        this.nextSong();
      }
      if(icon.src === "https://cdn-icons-png.flaticon.com/128/260/260446.png")
      {
      audio.pause()
      progress.value = 0;
      }else if(icon.src = "https://cdn-icons-png.flaticon.com/128/4181/4181163.png")
      {
      audio.play()  
      }
      this.render()
      this.scrollToActiveSong()
    };

    //replay
    let isReplay = false; // Khai báo biến toàn cục để lưu trạng thái replay
    const replay = $('#replay');
    const replayimg = $('#replayimg');

    replay.onclick = function() {
    isReplay = !isReplay;  // Đảo ngược trạng thái replay
    replay.classList.toggle('active', isReplay);  // Thêm class 'active' nếu là replay
    // Đổi hình ảnh icon khi replay
    if (replayimg.src === "https://cdn-icons-png.flaticon.com/128/4210/4210845.png") {
        replayimg.src = "https://cdn-icons-png.flaticon.com/128/4211/4211497.png";
    } else if (replayimg.src === "https://cdn-icons-png.flaticon.com/128/4211/4211497.png") {
        replayimg.src = "https://cdn-icons-png.flaticon.com/128/4210/4210845.png";
    }
    };

    //random
    let isRandom = false;
    const random = $('#random');
    const randomimg = $('#randomimg');
    random.onclick = function(){
        this.isRandom = !this.isRandom
        random.classList.toggle('active',this.isRandom)
      if(randomimg.src ==="https://cdn-icons-png.flaticon.com/128/10414/10414353.png"){
        randomimg.src = "https://cdn-icons-png.flaticon.com/128/6059/6059214.png";
      }else if(randomimg.src === "https://cdn-icons-png.flaticon.com/128/6059/6059214.png"){
        randomimg.src = "https://cdn-icons-png.flaticon.com/128/10414/10414353.png";
      }
    };  


    //khi ket thuc bai hat
    audio.onended = function() {
        if (isReplay) {
          audio.play();  // Phát lại bài hát nếu isReplay là true
        } else {
          next.click();  // Chuyển sang bài tiếp theo nếu không phải replay
        }
      };

    // playlist.onclick = function(e){
    //     const songNode = e.target.closest('#song:not(.active)')
    //     if(songNode || e.target.closest('#option')){
    //         // console.log(e.target)
    //         if(songNode){
    //             this.currentIndex = Number(songNode.dataset.index)
    //             this.loadCurrentSong()
    //             audio.play()
    //             this.render()
    //         }
    //     }
    // }
    playlist.onclick = (e) => {
        const songNode = e.target.closest('#song:not(.active)');
        if (songNode || e.target.closest('#option')) {
            // Kiểm tra nếu click vào bài hát
            if (songNode) {
                this.currentIndex = Number(songNode.dataset.index);
                this.loadCurrentSong(); // Gọi phương thức loadCurrentSong từ đối tượng hiện tại
                audio.play();
                this.render();
            }
        }
    };
    

 

    // Cập nhật thanh tiến trình theo thời gian của bài hát
    audio.ontimeupdate = function () {
      if (audio.duration) {
        var progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
        progress.value = progressPercent;
      }
    };

    // Xử lý tua bài hát
    progress.oninput = function () {
      const seekTime = (audio.duration / 100) * progress.value;
      audio.currentTime = seekTime;
    };
  },

  scrollToActiveSong:function(){
     setTimeout(()=>{
        $('#song.active').scrollIntoView({
            behavior:'smooth',
            block:'nearest',
        })
     },400)
  },
 

  loadCurrentSong: function(){
    //hien thi mac dinh bai hat dau ra dau tien
     const heading =$('header h2')
    const cdThumb =$('#cd-thumb')
     const audio = $('#audio')

     heading.textContent = this.currentSong.name
     cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
     audio.src = this.currentSong.path

    //  console.log(heading,cd,audio)
  },
  preSong: function(){
       this.currentIndex--
       if(this.currentIndex <0){
        this.currentIndex = this.songs.length -1
       }
       this.loadCurrentSong()
    },
  nextSong: function(){
       this.currentIndex++
       if(this.currentIndex >=this.songs.length){
        this.currentIndex =0
       }
       this.loadCurrentSong()
    },
  playRandomSong: function(){
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
    }while(newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
    // console.log(newIndex)
  },


  start :function() {
    //dinh nghia cac thuoc tinh cho object
    this.defineProperties()

    //lang nghe xu li cac su kien DOM
    this.handlerEvents()


    // tai thong tin bai hat dau tien 
    this.loadCurrentSong()

    //render playlist
     this.render()
  }
}
app.start();

