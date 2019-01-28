playGame = () => {
    let startingBet = parseInt(document.querySelector("#bet").value);
    let gameMoney = startingBet;
    // enter play loop
    if (startingBet > 0) {
        document.querySelector("#bet").setAttribute("disabled", true);
        let counter = 0;
        let highestAmountWon = startingBet;
        let rollCountAtHighest = 0;
        while (gameMoney > 0) {
            counter++;
            let num1 = Math.floor(Math.random() * 6) + 1;
            let num2 = Math.floor(Math.random() * 6) + 1;
            if (num1 + num2 === 7) {
                gameMoney += 4;
                if (gameMoney > highestAmountWon) {
                    highestAmountWon = gameMoney;
                    rollCountAtHighest = counter;
                };
            } else gameMoney--;
            console.log(counter, gameMoney)
        };

        // then change the page to display results
        document.querySelector("#starting-bet").innerHTML = "$" + startingBet;
        document.querySelector("#total-rolls").innerHTML = counter;
        document.querySelector("#highest-amount-won").innerHTML = "$" + highestAmountWon;
        document.querySelector("#roll-count-at-highest").innerHTML = rollCountAtHighest;
        // hide play button
        document.querySelector("#play").classList.add("d-none");
        // show results
        document.querySelector("#results-section").classList.remove("d-none");

    } else if (startingBet < 0) {
        // display error message
        alert("Good try, but we don't pay money out here.");
        document.querySelector("#bet").focus();
    } else {
        // display error message
        alert("Please enter a bet.");
        document.querySelector("#bet").focus();
    }
};

reset = () => {
    // make bet active again and reset
    document.querySelector("#bet").removeAttribute("disabled");
    document.querySelector("#bet").value = "";
    // show play button
    document.querySelector("#play").classList.remove("d-none");
    // hide results
    document.querySelector("#results-section").classList.add("d-none");
    // focus on bet box
    document.querySelector("#bet").focus();
};