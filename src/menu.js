export const makeMenu = () => {
  const content = document.getElementById("content");
  const homeContainer = document.createElement("div");
  content.innerHTML = "";
  const title = document.createElement("div");
  const mainInfo = document.createElement("div");
  const secondaryInfo = document.createElement("div");

  homeContainer.classList.add("homeContainer");
  title.classList.add("title");
  mainInfo.classList.add("mainInfo");
  secondaryInfo.classList.add("secondaryInfo");

  title.innerText = "Menu";
  mainInfo.innerText = "HAHA JOKES ON YOU WE SERVE NOTHING!";

  content.appendChild(homeContainer);
  homeContainer.append(title, mainInfo, secondaryInfo);
};
