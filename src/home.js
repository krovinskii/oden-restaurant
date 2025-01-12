export const makeHome = () => {
  const content = document.getElementById("content");
  const homeContainer = document.createElement("div");
  content.innerHTML = "";
  const title = document.createElement("div");
  const mainInfo = document.createElement("div");
  const secondaryInfo = document.createElement("div");

  const monday = document.createElement("div");
  const tuesday = document.createElement("div");
  const wednesday = document.createElement("div");
  const thursday = document.createElement("div");
  const friday = document.createElement("div");
  const saturday = document.createElement("div");
  const sunday = document.createElement("div");

  title.innerText = "RESTARAUNT";
  mainInfo.innerText =
    "blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah";
  secondaryInfo.innerText = "SECONDARY INFO";
  monday.innerText = "monday";
  tuesday.innerText = "tuesday";
  wednesday.innerText = "wednesday";
  thursday.innerText = "thursday";
  friday.innerText = "friday";
  saturday.innerText = "saturday";
  sunday.innerText = "sunday";

  homeContainer.classList.add("homeContainer");
  title.classList.add("title");
  mainInfo.classList.add("mainInfo");
  secondaryInfo.classList.add("secondaryInfo");
  monday.classList.add("hours");
  tuesday.classList.add("hours");
  wednesday.classList.add("hours");
  thursday.classList.add("hours");
  friday.classList.add("hours");
  saturday.classList.add("hours");
  sunday.classList.add("hours");

  content.appendChild(homeContainer);
  homeContainer.append(title, mainInfo, secondaryInfo);
  secondaryInfo.append(
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  );
};
