import React from "react";
import './App.css'

const App = () => {
  const languages = [
    {
      no: "0",
      name: "Auto",
      native: "Detect",
      code: "auto",
    },
    {
      no: "1",
      name: "Afrikaans",
      native: "Afrikaans",
      code: "af",
    },
    {
      no: "2",
      name: "Albanian",
      native: "Shqip",
      code: "sq",
    },
    {
      no: "3",
      name: "Arabic",
      native: "عربي",
      code: "ar",
    },
    {
      no: "4",
      name: "Armenian",
      native: "Հայերէն",
      code: "hy",
    },
    {
      no: "5",
      name: "Azerbaijani",
      native: "آذربایجان دیلی",
      code: "az",
    },
    {
      no: "6",
      name: "Basque",
      native: "Euskara",
      code: "eu",
    },
    {
      no: "7",
      name: "Belarusian",
      native: "Беларуская",
      code: "be",
    },
    {
      no: "8",
      name: "Bulgarian",
      native: "Български",
      code: "bg",
    },
    {
      no: "9",
      name: "Catalan",
      native: "Català",
      code: "ca",
    },
    {
      no: "10",
      name: "Chinese (Simplified)",
      native: "中文简体",
      code: "zh-CN",
    },
    {
      no: "11",
      name: "Chinese (Traditional)",
      native: "中文繁體",
      code: "zh-TW",
    },
    {
      no: "12",
      name: "Croatian",
      native: "Hrvatski",
      code: "hr",
    },
    {
      no: "13",
      name: "Czech",
      native: "Čeština",
      code: "cs",
    },
    {
      no: "14",
      name: "Danish",
      native: "Dansk",
      code: "da",
    },
    {
      no: "15",
      name: "Dutch",
      native: "Nederlands",
      code: "nl",
    },
    {
      no: "16",
      name: "English",
      native: "English",
      code: "en",
    },
    {
      no: "17",
      name: "Estonian",
      native: "Eesti keel",
      code: "et",
    },
    {
      no: "18",
      name: "Filipino",
      native: "Filipino",
      code: "tl",
    },
    {
      no: "19",
      name: "Finnish",
      native: "Suomi",
      code: "fi",
    },
    {
      no: "20",
      name: "French",
      native: "Français",
      code: "fr",
    },
    {
      no: "21",
      name: "Galician",
      native: "Galego",
      code: "gl",
    },
    {
      no: "22",
      name: "Georgian",
      native: "ქართული",
      code: "ka",
    },
    {
      no: "23",
      name: "German",
      native: "Deutsch",
      code: "de",
    },
    {
      no: "24",
      name: "Greek",
      native: "Ελληνικά",
      code: "el",
    },
    {
      no: "25",
      name: "Haitian Creole",
      native: "Kreyòl ayisyen",
      code: "ht",
    },
    {
      no: "26",
      name: "Hebrew",
      native: "עברית",
      code: "iw",
    },
    {
      no: "27",
      name: "Hindi",
      native: "हिन्दी",
      code: "hi",
    },
    {
      no: "28",
      name: "Hungarian",
      native: "Magyar",
      code: "hu",
    },
    {
      no: "29",
      name: "Icelandic",
      native: "Íslenska",
      code: "is",
    },
    {
      no: "30",
      name: "Indonesian",
      native: "Bahasa Indonesia",
      code: "id",
    },
    {
      no: "31",
      name: "Irish",
      native: "Gaeilge",
      code: "ga",
    },
    {
      no: "32",
      name: "Italian",
      native: "Italiano",
      code: "it",
    },
    {
      no: "33",
      name: "Japanese",
      native: "日本語",
      code: "ja",
    },
    {
      no: "34",
      name: "Korean",
      native: "한국어",
      code: "ko",
    },
    {
      no: "35",
      name: "Latvian",
      native: "Latviešu",
      code: "lv",
    },
    {
      no: "36",
      name: "Lithuanian",
      native: "Lietuvių kalba",
      code: "lt",
    },
    {
      no: "37",
      name: "Macedonian",
      native: "Македонски",
      code: "mk",
    },
    {
      no: "38",
      name: "Malay",
      native: "Malay",
      code: "ms",
    },
    {
      no: "39",
      name: "Maltese",
      native: "Malti",
      code: "mt",
    },
    {
      no: "40",
      name: "Norwegian",
      native: "Norsk",
      code: "no",
    },
    {
      no: "41",
      name: "Persian",
      native: "فارسی",
      code: "fa",
    },
    {
      no: "42",
      name: "Polish",
      native: "Polski",
      code: "pl",
    },
    {
      no: "43",
      name: "Portuguese",
      native: "Português",
      code: "pt",
    },
    {
      no: "44",
      name: "Romanian",
      native: "Română",
      code: "ro",
    },
    {
      no: "45",
      name: "Russian",
      native: "Русский",
      code: "ru",
    },
    {
      no: "46",
      name: "Serbian",
      native: "Српски",
      code: "sr",
    },
    {
      no: "47",
      name: "Slovak",
      native: "Slovenčina",
      code: "sk",
    },
    {
      no: "48",
      name: "Slovenian",
      native: "Slovensko",
      code: "sl",
    },
    {
      no: "49",
      name: "Spanish",
      native: "Español",
      code: "es",
    },
    {
      no: "50",
      name: "Swahili",
      native: "Kiswahili",
      code: "sw",
    },
    {
      no: "51",
      name: "Swedish",
      native: "Svenska",
      code: "sv",
    },
    {
      no: "52",
      name: "Thai",
      native: "ไทย",
      code: "th",
    },
    {
      no: "53",
      name: "Turkish",
      native: "Türkçe",
      code: "tr",
    },
    {
      no: "54",
      name: "Ukrainian",
      native: "Українська",
      code: "uk",
    },
    {
      no: "55",
      name: "Urdu",
      native: "اردو",
      code: "ur",
    },
    {
      no: "56",
      name: "Vietnamese",
      native: "Tiếng Việt",
      code: "vi",
    },
    {
      no: "57",
      name: "Welsh",
      native: "Cymraeg",
      code: "cy",
    },
    {
      no: "58",
      name: "Yiddish",
      native: "ייִדיש",
      code: "yi",
    },
  ];

  const dropdowns = document.querySelectorAll(".dropdown-container"),
    inputLanguageDropdown = document.querySelector("#input-language"),
    outputLanguageDropdown = document.querySelector("#output-language");

  function populateDropdown(dropdown, options) {
    dropdown.querySelector("ul").innerHTML = "";
    options.forEach((option) => {
      const li = document.createElement("li");
      const title = option.name + " (" + option.native + ")";
      li.innerHTML = title;
      li.dataset.value = option.code;
      li.classList.add("option");
      dropdown.querySelector("ul").appendChild(li);
    });
  }

  populateDropdown(inputLanguageDropdown, languages);
  populateDropdown(outputLanguageDropdown, languages);

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      dropdown.classList.toggle("active");
    });

    dropdown.querySelectorAll(".option").forEach((item) => {
      item.addEventListener("click", (e) => {
        //remove active class from current dropdowns
        dropdown.querySelectorAll(".option").forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
        const selected = dropdown.querySelector(".selected");
        selected.innerHTML = item.innerHTML;
        selected.dataset.value = item.dataset.value;
        translate();
      });
    });
  });
  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  });

  const swapBtn = document.querySelector(".swap-position"),
    inputLanguage = inputLanguageDropdown.querySelector(".selected"),
    outputLanguage = outputLanguageDropdown.querySelector(".selected"),
    inputTextElem = document.querySelector("#input-text"),
    outputTextElem = document.querySelector("#output-text");

  swapBtn.addEventListener("click", (e) => {
    const temp = inputLanguage.innerHTML;
    inputLanguage.innerHTML = outputLanguage.innerHTML;
    outputLanguage.innerHTML = temp;

    const tempValue = inputLanguage.dataset.value;
    inputLanguage.dataset.value = outputLanguage.dataset.value;
    outputLanguage.dataset.value = tempValue;

    //swap text
    const tempInputText = inputTextElem.value;
    inputTextElem.value = outputTextElem.value;
    outputTextElem.value = tempInputText;

    translate();
  });

  function translate() {
    const inputText = inputTextElem.value;
    const inputLanguage =
      inputLanguageDropdown.querySelector(".selected").dataset.value;
    const outputLanguage =
      outputLanguageDropdown.querySelector(".selected").dataset.value;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
      inputText
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        outputTextElem.value = json[0].map((item) => item[0]).join("");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  inputTextElem.addEventListener("input", (e) => {
    //limit input to 5000 characters
    if (inputTextElem.value.length > 5000) {
      inputTextElem.value = inputTextElem.value.slice(0, 5000);
    }
    translate();
  });

  const uploadDocument = document.querySelector("#upload-document"),
    uploadTitle = document.querySelector("#upload-title");

  uploadDocument.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (
      file.type === "application/pdf" ||
      file.type === "text/plain" ||
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      uploadTitle.innerHTML = file.name;
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        inputTextElem.value = e.target.result;
        translate();
      };
    } else {
      alert("Please upload a valid file");
    }
  });

  const downloadBtn = document.querySelector("#download-btn");

  downloadBtn.addEventListener("click", (e) => {
    const outputText = outputTextElem.value;
    const outputLanguage =
      outputLanguageDropdown.querySelector(".selected").dataset.value;
    if (outputText) {
      const blob = new Blob([outputText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.download = `translated-to-${outputLanguage}.txt`;
      a.href = url;
      a.click();
    }
  });

  const darkModeCheckbox = document.getElementById("dark-mode-btn");

  darkModeCheckbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

  const inputChars = document.querySelector("#input-chars");

  inputTextElem.addEventListener("input", (e) => {
    inputChars.innerHTML = inputTextElem.value.length;
  });

  return (
    <div>
      <div class="mode">
        <label class="toggle" for="dark-mode-btn">
          <div class="toggle-track">
            <input type="checkbox" class="toggle-checkbox" id="dark-mode-btn" />
            <span class="toggle-thumb"></span>
            <img src="images/sun.png" alt="" />
            <img src="images/moon.png" alt="" />
          </div>
        </label>
      </div>
      <div class="container">
        <div class="card input-wrapper">
          <div class="from">
            <span class="heading">From :</span>
            <div class="dropdown-container" id="input-language">
              <div class="dropdown-toggle">
                <ion-icon name="globe-outline"></ion-icon>
                <span class="selected" data-value="auto">
                  Auto Detect
                </span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              <ul class="dropdown-menu">
                <li class="option active">DropDown Menu Item 1</li>
                <li class="option">DropDown Menu Item 2</li>
              </ul>
            </div>
          </div>
          <div class="text-area">
            <textarea
              id="input-text"
              cols="30"
              rows="10"
              placeholder="Enter your text here"
            ></textarea>
            <div class="chars">
              <span id="input-chars">0</span> / 5000
            </div>
          </div>
          <div class="card-bottom">
            <p>Or choose your document!</p>
            <label for="upload-document">
              <span id="upload-title">Choose File</span>
              <ion-icon name="cloud-upload-outline"></ion-icon>
              <input type="file" id="upload-document" hidden />
            </label>
          </div>
        </div>

        <div class="center">
          <div class="swap-position">
            <ion-icon name="swap-horizontal-outline"></ion-icon>
          </div>
        </div>

        <div class="card output-wrapper">
          <div class="to">
            <span class="heading">To :</span>
            <div class="dropdown-container" id="output-language">
              <div class="dropdown-toggle">
                <ion-icon name="globe-outline"></ion-icon>
                <span class="selected" data-value="en">
                  Englsih
                </span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              <ul class="dropdown-menu">
                <li class="option active">DropDown Menu Item 1</li>
                <li class="option">DropDown Menu Item 2</li>
              </ul>
            </div>
          </div>
          <textarea
            id="output-text"
            cols="30"
            rows="10"
            placeholder="Translated text will appear here"
            disabled
          ></textarea>
          <div class="card-bottom">
            <p>Download as a document!</p>
            <button id="download-btn">
              <span>Download</span>
              <ion-icon name="cloud-download-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
