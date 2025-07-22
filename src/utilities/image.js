
export const phoneImage= (path)=>{
    const baseUrlPhoneo = "https://phoneo1.s3.ap-south-1.amazonaws.com/"
    const baseUrlData = "https://Super.phoneo.in/"
  const image=path?.startsWith("Phoneo")
  ? `${baseUrlPhoneo}${path}`
  : `${baseUrlData}${path}`
    return image;
}