import video from "../assets/football3.mp4";


const About = () => {
  return (
    <div>
<div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full   mx-2 my-4"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
    </div>
  )
}

export default About