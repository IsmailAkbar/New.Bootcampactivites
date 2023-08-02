let h1Style = document.getElementById("styleMe");

// h1Style.style.background = "red";
// h1Style.style.color = "white";
// h1Style.style.width = "400px";
// h1Style.style.height = "400px";

// cssText
h1Style.style.cssText = "background:red; color:white; width:400px; height:400px;";

// if css is already applied use css text with +=
h1Style.style.cssText += "text-align:center; "



console.log(getComputedStyle(h1Style))
