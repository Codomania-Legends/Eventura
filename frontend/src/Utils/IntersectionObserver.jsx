import gsap from "gsap";

const Intersection_Observer = ( selector , ref1 , ref2 , ref3 , func ) => {
  return new IntersectionObserver((entries , observer) => {
    if( selector == "pastevents" ){
      if (entries[0].isIntersecting) {

        gsap.fromTo(ref1.current, { x: 0, opacity: 0 }, { x: 250,y:40, opacity: 1, duration: 0.2,rotation : 10 });
        gsap.fromTo(ref2.current, { x: 0, opacity: 0 }, { x: -250,y:40,opacity: 1, duration: 0.2,rotation : -10 });
        gsap.fromTo(ref3.current, { x: 0, opacity: 0 }, { x : 0, opacity: 1, duration: 0.2 });

        observer.disconnect();
      }
    }
    if( selector == "options" ){
      if( entries[0].isIntersecting ){
        func( ref2 )
        observer.disconnect();
      }
    }
  }, { threshold: 0.1 });
}

export default Intersection_Observer
