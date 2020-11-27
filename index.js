const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const newQ = document.getElementById("newQ");
        const tweet = document.getElementById("tweet");
        let realData = "";
        let quoteData = "";

        const tweetNow = () => {
            tweet.href = `https://twitter.com/intent/tweet?text=${quotesData.text} ~ by ${quoteData.author}`;
        }
        // Function to generate random number  
            function randomNumber(min, max) {  
                return Math.floor(Math.random() * (max - min) + min); 
            }  
        const getNewQuote = () => {
            let rnum = randomNumber(1,1643);
            // console.log(rnum);
            quoteData = realData[rnum];
            quotes.innerText = `${quoteData.text}`;
            quoteData.author == null ? author.innerText = `by Unknown` 
            :  author.innerText = `by ${realData[rnum].author}`;
        }

        const getQuotes = async () => {
        const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuote();
            } catch (error) {
                
            }
        };

        tweet.addEventListener('click', tweetNow);

        newQ.addEventListener('click', getNewQuote);
        getQuotes();
