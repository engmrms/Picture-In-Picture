const btn = document.getElementById("button");
const videoElement = document.getElementById("video");


async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play()
        }
    } catch (error) {
        console.log("opposss Somthing wrong",error)
    }

}


btn.addEventListener("click",async()=>{
    btn.disabled = true;
    await videoElement.requestPictureInPicture();
    btn.disabled= false
})
selectMediaStream()