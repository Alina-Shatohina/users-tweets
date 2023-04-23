import imgHello from '../image/welcome.jpg';

export default function Home() {
  return (
    <div>
      <img src={imgHello} alt='Hello' style={{ width:'100%',marginTop:'20px'}}/>
    </div>

  );
}
