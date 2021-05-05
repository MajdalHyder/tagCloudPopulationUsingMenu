function addToCloud(menu) {
    let tagCloud = document.getElementById("language-cloud")
    let tagCloudChildCount = tagCloud.childNodes.length;
    console.log(tagCloudChildCount);
    for (let i = 0; i < tagCloudChildCount; i++) {
        if (tagCloud.childNodes[i].value == menu.value) {
            alert("already exists");
            return;
        }
    }
    let newTag = document.createElement("option");
    newTag.setAttribute("value", menu.value);
    let tagContent = document.createTextNode(menu.options[menu.selectedIndex].text);
    newTag.appendChild(tagContent);
    tagCloud.appendChild(newTag);
}

var tagCloud = document.getElementById("language-cloud");
tagCloud.addEventListener('click', function(e) {
    tagCloud.removeChild(e.target);
})

/*
	Test HTML code:
	<select id="language-menu" onChange="addToCloud(this)">
    		<option value="ar">Arabic</option>
   		<option value="en">English</option>
    		<option value="fr">French</option>
    		<option value="de">German</option>
	</select>

	<div id="language-cloud">

	</div>
*/
