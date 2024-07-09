
import Spline from '@splinetool/react-spline';
import mainVideo from './Assets/mainVideo.mp4';
export default function SplineElement() {
  return (
    <video
    src={mainVideo}
    autoPlay
    loop
    muted
    playsInline
    />  
    // <Spline scene="https://prod.spline.design/gEjwhpj6dNDva5Kh/scene.splinecode" />
  );
}
