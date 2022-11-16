const fetchData = async () => {
  try {
    let response = await fetch("https://api.github.com/users/PetrBelyayev");
    let user = await response.json();
    console.log(user.bio);
    console.log(user.avatar_url);
    console.log(user.bio);
    console.log(user.hireable);
    document.getElementById("bio").innerHTML = user.bio;

    document.getElementById("profile").src = user.avatar_url;
    if (user.hireable === true) {
      document.getElementById("hire").innerHTML = "I'm available for hire!";
    } else {
      console.log(
        "I’m not currently looking for any new opportunities, but feel free to reach out for any questions"
      );
    }
  } catch (error) {
    console.log("Error with finding user", error);
  }
};

// fetchData();

VANTA.NET({
  el: "#canvas",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 100.0,
  minWidth: 100.0,
  scale: 1,
  scaleMobile: 1.0,
  color: "#FD4DF6",
  backgroundColor: "#FFFFFF",
  maxDistance: 50.0,
  spacing: 39.0,
  showDots: true,
});
