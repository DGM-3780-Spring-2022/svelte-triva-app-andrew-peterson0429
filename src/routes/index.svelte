<script>
    import { onMount } from "svelte";
    import { HtmlTag } from "svelte/internal";
      
    
      async function fetchTrivia() {
        const response = await self.fetch(`https://opentdb.com/api.php?amount=1&category=${document.querySelector('input[name="category-radio"]:checked').value}&difficulty=${document.querySelector('input[name="difficulty-radio"]:checked').value}&type=multiple`);
        const data = await response.json();
        console.log(data);
        useApidata(data)
      };
    
      
      function startTriviaBtn() {
            promise = fetchTrivia();
            disabled = true;
        }

        let correctCounter = 1;
        let incorrectCounter = 1;

        function correctBtn() {
            document.querySelector('#correctCounterTable').innerHTML = correctCounter ++;
            fetchTrivia()
        }

        function incorrectBtn() {
            document.querySelector('#incorrectCounterTable').innerHTML = incorrectCounter ++;
            fetchTrivia()
        }
  
      function useApidata(data){
          document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
          document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
          document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`
          document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
          document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
          document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
          document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]
        }
        
        

  </script>
  
  <!--HTML-->
  <body>
      <div id="header">
            <h1 id="title">
                Trivia Game
            </h1>
      </div>
        <div id="selection-area">
            <div id="cat-and-diff-area">
                <div id="category-area">
                  <h3>Select a Category</h3>
                  <div>
                      <input type="radio"  id="general" name="category-radio" value=9
                  checked>
                      <label for="general" >General Knowledge</label>
                      </div>
                      
                      <div>
                      <input type="radio" id="entertainment" name="category-radio" value=14>
                      <label for="entertainment">Entertainment</label>
                      </div>
                      
                      <div>
                      <input type="radio" id="science" name="category-radio" value=17>
                      <label for="science">Science & Nature</label>
                  </div>
                </div>
                      
                  <div id="difficulty-area">
                      <h3>Select Difficulty</h3>
                      <div>
                          <input type="radio" id="easy" name="difficulty-radio" value="easy"
                                  checked>
                          <label for="easy">Easy</label>
                          </div>
                          
                          <div>
                          <input type="radio" id="medium" name="difficulty-radio" value="medium">
                          <label for="medium">Medium</label>
                          </div>
                          
                          <div>
                          <input type="radio" id="hard" name="difficulty-radio" value="hard">
                          <label for="hard">Hard</label>
                      </div>
                  </div>
              </div>

              <div id="selection-area-btn">
                <button id="startBtn" on:click={startTriviaBtn}>Start Trivia</button>
            </div>
        </div>
        
      <div class="card">
            <p id="category"></p>
            
            <p id="difficulty"></p>
            
            <p id="question"></p>

            <div class="buttons">
                <button id="answer1" on:click={correctBtn}></button>
            
                <button id="answer2" on:click={incorrectBtn}></button>
                
                <button id="answer3" on:click={incorrectBtn}></button>
                
                <button id="answer4" on:click={incorrectBtn}></button>
            </div>
            
            
        </div>
  
      <!-- <table>
          <tr>
            <th>Number of Times Correct</th>
            <th>Number of Times Incorrect</th>
          </tr>
          <tr>
            <td id="correctCounterTable">0</td>
          </tr>
          <tr>
            <td id="incorrectCounterTable">0</td>
          </tr>
        </table> -->

        <div class="counter">
            <div id="correctCounter">
                <h3>Correct</h3>
                <p id="correctCounterTable">0</p>
            </div>

            <div id="incorrectCounter">
                <h3>Incorrect</h3>
                <p id="incorrectCounterTable">0</p>
            </div>
            
            
        </div>
  
  </body>
  

<style>
    body {
        font-family: 'Roboto', sans-serif;
        /* background-color: #EDF2F4; */
        max-width: 700px;
    }

    #title {
        font-size: 48px;
        text-align: center;
        font-weight: 900;
        color: #EF233C;
    }

    #selection-area {
        background-color: #8D99AE;
        border: 1px solid none;
        padding: 15px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }

    #cat-and-diff-area {
        display: flex;
        justify-content: space-evenly;
    }

    #category-area {
        color: #fff;
        flex-direction: column;
    }

    #difficulty-area {
        color: #fff;
        flex-direction: column;
    }
   
    #selection-area-btn {
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }

    #startBtn {
        background-color: #2B2D42;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    #startBtn:hover {
        cursor: pointer;
    }

    .card {
        background-color: #8D99AE;
        margin-top: 15px;
        border: 1px solid none;
        padding: 15px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }

    #question {
        font-size: 32px;
        text-align: center;
        color: #fff;
    }

    #difficulty {
        color: #fff;
    }

    #category {
        color: #fff;
    }

    .buttons {
        display: flex;
        justify-content: space-evenly;
    }

    #answer1 {
        background-color: #2B2D42;
        border: none;
        border-radius: 5px;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    #answer1:hover {
        cursor: pointer;
    }

    #answer2 {
        background-color: #2B2D42;
        border: none;
        border-radius: 5px;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    #answer2:hover {
        cursor: pointer;
    }

    #answer3 {
        background-color: #2B2D42;
        border: none;
        border-radius: 5px;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    #answer3:hover {
        cursor: pointer;
    }

    #answer4 {
        background-color: #2B2D42;
        border: none;
        border-radius: 5px;
        color: white;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    #answer4:hover {
        cursor: pointer;
    }

    .counter {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
    }

    #correctCounter {
        color: green;
    }

    #incorrectCounter {
        color: #ff0000;
    }

</style>