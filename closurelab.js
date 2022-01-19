// window.onload = function() {
//     document.getElementById("accountList").value = ""; //clear textarea
// }

var accountInfoList = [];
var account = (function() {
    function Account(name, deposit) {
        this.name = name;
        this.deposit = deposit;
    }

    // function addToList(acc) {
    //     document.getElementById("accountList").value += "Account name: " + acc.name + " Balance: " + acc.deposit + "\n";
    // }

    function showAccounts() {
        document.getElementById("accountList").value = "";
        accountInfoList.forEach(acc => {
            document.getElementById("accountList").value += "Account name: " + acc.name + " Balance: " + acc.deposit + "\n";
        });
    }

    return {
        create: function() {
            var name = document.getElementById("accountname").value;
            var deposit = document.getElementById("deposit").value;
            if (name.trim() != "" && deposit > 0) {
                var newAccount = new Account(name, deposit);
                //alert(newAccount.name);
                accountInfoList.push(newAccount);
                //addToList(newAccount);
                showAccounts();
            }
        }
    };
})();