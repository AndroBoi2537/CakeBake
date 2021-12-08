const hero = document.querySelector("#hero");
const fIcon = document.getElementById("fIcon");
const sIcon = document.getElementById("sIcon");
const tIcon = document.getElementById("tIcon");

function iconsObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  function firstIcon() {
    const callback = (events, observer) => {
      events.forEach((event) => {
        if (event.isIntersecting) {
          event.target.classList.add(
            "animate__animated",
            "animate__lightSpeedInLeft"
          );
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(fIcon);
  }

  function secondIcon() {
    const callback = (events, observer) => {
      events.forEach((event) => {
        if (event.isIntersecting) {
          event.target.classList.add("animate__animated", "animate__tada");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(sIcon);
  }

  function thirdIcon() {
    const callback = (events, observer) => {
      events.forEach((event) => {
        if (event.isIntersecting) {
          event.target.classList.add("animate__animated", "animate__bounce");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(tIcon);
  }

  firstIcon();
  secondIcon();
  thirdIcon();
}

function intObserver() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const callback = (events, observer) => {
    events.forEach((event) => {
      if (event.isIntersecting) {
        event.target.classList.add("animate__animated", "animate__bounce");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  observer.observe(hero);

  iconsObserver();
}

export default intObserver;
