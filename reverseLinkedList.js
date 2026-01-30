class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
   
    reverseList(head){
        if (!head) {
            return null;
        }

        let newHead = head;
        if (head.next) {
            newHead = this.reverseList(head.next);
            head.next.next = head;
        }
        head.next = null;
        return newHead;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
const sol = new Solution();
console.log(sol.reverseList(head));

