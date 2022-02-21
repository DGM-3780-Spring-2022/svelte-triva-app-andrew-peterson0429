import { c as create_ssr_component } from "../../chunks/index-2dc61825.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-lt414x{font-family:'Roboto', sans-serif;max-width:700px}#title.svelte-lt414x{font-size:48px;text-align:center;font-weight:900;color:#EF233C}#selection-area.svelte-lt414x{background-color:#8D99AE;border:1px solid none;padding:15px;box-shadow:2px 4px 4px rgba(0, 0, 0, 0.25)}#cat-and-diff-area.svelte-lt414x{display:flex;justify-content:space-evenly}#category-area.svelte-lt414x{color:#fff;flex-direction:column}#difficulty-area.svelte-lt414x{color:#fff;flex-direction:column}#selection-area-btn.svelte-lt414x{display:flex;justify-content:center;margin-top:15px}#startBtn.svelte-lt414x{background-color:#2B2D42;border:none;border-radius:5px;color:white;font-weight:bold;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block}#startBtn.svelte-lt414x:hover{cursor:pointer}.card.svelte-lt414x{background-color:#8D99AE;margin-top:15px;border:1px solid none;padding:15px;box-shadow:2px 4px 4px rgba(0, 0, 0, 0.25)}#question.svelte-lt414x{font-size:32px;text-align:center;color:#fff}#difficulty.svelte-lt414x{color:#fff}#category.svelte-lt414x{color:#fff}.buttons.svelte-lt414x{display:flex;justify-content:space-evenly}#answer1.svelte-lt414x{background-color:#2B2D42;border:none;border-radius:5px;color:white;padding:15px;text-align:center;text-decoration:none;display:inline-block}#answer1.svelte-lt414x:hover{cursor:pointer}#answer2.svelte-lt414x{background-color:#2B2D42;border:none;border-radius:5px;color:white;padding:15px;text-align:center;text-decoration:none;display:inline-block}#answer2.svelte-lt414x:hover{cursor:pointer}#answer3.svelte-lt414x{background-color:#2B2D42;border:none;border-radius:5px;color:white;padding:15px;text-align:center;text-decoration:none;display:inline-block}#answer3.svelte-lt414x:hover{cursor:pointer}#answer4.svelte-lt414x{background-color:#2B2D42;border:none;border-radius:5px;color:white;padding:15px;text-align:center;text-decoration:none;display:inline-block}#answer4.svelte-lt414x:hover{cursor:pointer}.counter.svelte-lt414x{display:flex;justify-content:space-evenly;text-align:center}#correctCounter.svelte-lt414x{color:green}#incorrectCounter.svelte-lt414x{color:#ff0000}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
  <body class="${"svelte-lt414x"}"><div id="${"header"}"><h1 id="${"title"}" class="${"svelte-lt414x"}">Trivia Game
            </h1></div>
        <div id="${"selection-area"}" class="${"svelte-lt414x"}"><div id="${"cat-and-diff-area"}" class="${"svelte-lt414x"}"><div id="${"category-area"}" class="${"svelte-lt414x"}"><h3>Select a Category</h3>
                  <div><input type="${"radio"}" id="${"general"}" name="${"category-radio"}" value="${"9"}" checked>
                      <label for="${"general"}">General Knowledge</label></div>
                      
                      <div><input type="${"radio"}" id="${"entertainment"}" name="${"category-radio"}" value="${"14"}">
                      <label for="${"entertainment"}">Entertainment</label></div>
                      
                      <div><input type="${"radio"}" id="${"science"}" name="${"category-radio"}" value="${"17"}">
                      <label for="${"science"}">Science &amp; Nature</label></div></div>
                      
                  <div id="${"difficulty-area"}" class="${"svelte-lt414x"}"><h3>Select Difficulty</h3>
                      <div><input type="${"radio"}" id="${"easy"}" name="${"difficulty-radio"}" value="${"easy"}" checked>
                          <label for="${"easy"}">Easy</label></div>
                          
                          <div><input type="${"radio"}" id="${"medium"}" name="${"difficulty-radio"}" value="${"medium"}">
                          <label for="${"medium"}">Medium</label></div>
                          
                          <div><input type="${"radio"}" id="${"hard"}" name="${"difficulty-radio"}" value="${"hard"}">
                          <label for="${"hard"}">Hard</label></div></div></div>

              <div id="${"selection-area-btn"}" class="${"svelte-lt414x"}"><button id="${"startBtn"}" class="${"svelte-lt414x"}">Start Trivia</button></div></div>
        
      <div class="${"card svelte-lt414x"}"><p id="${"category"}" class="${"svelte-lt414x"}"></p>
            
            <p id="${"difficulty"}" class="${"svelte-lt414x"}"></p>
            
            <p id="${"question"}" class="${"svelte-lt414x"}"></p>

            <div class="${"buttons svelte-lt414x"}"><button id="${"answer1"}" class="${"svelte-lt414x"}"></button>
            
                <button id="${"answer2"}" class="${"svelte-lt414x"}"></button>
                
                <button id="${"answer3"}" class="${"svelte-lt414x"}"></button>
                
                <button id="${"answer4"}" class="${"svelte-lt414x"}"></button></div></div>
  
      

        <div class="${"counter svelte-lt414x"}"><div id="${"correctCounter"}" class="${"svelte-lt414x"}"><h3>Correct</h3>
                <p id="${"correctCounterTable"}">0</p></div>

            <div id="${"incorrectCounter"}" class="${"svelte-lt414x"}"><h3>Incorrect</h3>
                <p id="${"incorrectCounterTable"}">0</p></div></div>
  
  </body>`;
});
export { Routes as default };
