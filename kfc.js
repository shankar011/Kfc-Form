
        function OrderClick(){
            document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
            document.getElementById("lblMobile").innerHTML = document.getElementById("txtMobile").value;

            var mealName = "";
            var mealCost = 0;
            var AdOnName = "";
            var AdOnCost = 0;
            var Total = 0;

            //Radios - Meal
            var optBurger = document.getElementById("optBurger");
            var optRoller = document.getElementById("optRoller");

            if(optBurger.checked) {
                mealName = optBurger.value;
                mealCost = 120;
            }

            if(optRoller.checked) {
                mealName = optRoller.value;
                mealCost = 100;
            }

            //CheckBox - AdOn
            var optWings = document.getElementById("optWings");
            var optKrusher = document.getElementById("optKrusher");

            if(optWings.checked) {
                AdOnName += optWings.value + "<br>";
                AdOnCost = 60;
                mealCost += AdOnCost;
            }

            if(optKrusher.checked) {
                AdOnName += optKrusher.value + "<br>";
                AdOnCost = 40;
                mealCost += AdOnCost;
            }
            Total = mealCost;

            document.getElementById("lblMeal").innerHTML = mealName;
            document.getElementById("lblAdon").innerHTML = AdOnName;
            document.getElementById("lblTotal").innerHTML = "&#8377;" + Total  + "/-";
        }
    