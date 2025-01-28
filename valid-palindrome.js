

    const isPalindrome = (s) =>{
        //lowercase
        const string = s.toLowerCase();
        //pointers
        let l = 0;
        let r = string.length - 1;
        //the characters must be at the character codes or the marker
        //will change
        //if the indexes equal echaother, keep going
        //if not then you need to return false
        while (l < r) {
            while (l < r && 
            !alphaNum(string[l])) {
                l++;
            }
            while (r > l && !alphaNum(string[r])){
                r--;
            }
        if (string[l] !== string[r]) {
            return false;
        }
        l++;
        r--;
        }
        return true;
    }

    const alphaNum = (c) => {
        const charCode = c.charCodeAt(0);
        return (
            (65 <= charCode && charCode <= 90) ||
            (97 <= charCode && charCode <= 122) ||
            (48 <= charCode && charCode <= 57)
        );
    }


//Have Two Pointers
//one at the Beginning and one at the end 
//use to lowercase
//if the 
console.log(isPalindrome("Was it a car or a cat I saw?"));
