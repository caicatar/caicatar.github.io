document.addEventListener("DOMContentLoaded", function() {
  const majorVersionDropdown = document.getElementById("majorVersion");
  const minorVersionDropdown = document.getElementById("minorVersion");
  const downloadLinkInput = document.getElementById("downloadLink");

  const versions = {
    "26": ["26.0.0 (xxxxx)"],
    "20": ["20.4.1 (55996)", "20.4.0 (55980)", "20.3.2 (55975)", "20.3.1 (55959)", "20.3.0 (55895)"],
    "19": ["19.4.1 (54985)", "19.4.0 (54962)", "19.3.1 (54941)", "19.3.0 (54924)",
          "19.2.1 (54832)", "19.2.0 (54827)", "19.1.1 (54734)", "19.1.0 (54729)", "19.0.0 (54570)"],
    "18": ["18.3.2 (53621)", "18.3.1 (53614)", "18.3.0 (52606)", "18.2.0 (53488)", "18.1.1 (53328)", 
          "18.1.0 (53311)", "18.0.3 (53079)", "18.0.2 (53077)", "18.0.1 (53056)", "18.0.0 (53049)"]
  };

  function populateMinorVersions() {
    const selectedMajorVersion = majorVersionDropdown.value;
    minorVersionDropdown.innerHTML = '<option selected disabled>Select Version</option>';
    
    if (selectedMajorVersion in versions) {
      versions[selectedMajorVersion].forEach(function(version, index) {
        const option = document.createElement("option");
        option.value = version;
        option.textContent = version;
        minorVersionDropdown.appendChild(option);
      });
    }
  }

  majorVersionDropdown.addEventListener("change", function() {
    populateMinorVersions();
    updateDownloadLink();
  });

  minorVersionDropdown.addEventListener("change", function() {
    updateDownloadLink();
  });

  function updateDownloadLink() {
    const majorVersion = majorVersionDropdown.value;
    const minorVersion = minorVersionDropdown.value.split(" ")[0]; // Extract version number
    const buildNumber = minorVersionDropdown.value.split(" ")[1].replace("(", "").replace(")", "");

    const link = `https://download.parallels.com/desktop/v${majorVersion}/${minorVersion}-${buildNumber}/ParallelsDesktop-${minorVersion}-${buildNumber}.dmg`;
    downloadLinkInput.value = link;
    
  }
});

