class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {

    mergeTwoLists(list1,list2) {
        if (!list1) return list2;
        if (!list2) return list1;

        if (list1.val <= list2.val) {
            list1.next = this.mergeTwoLists(list1.next,list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1,list2.next);
            return list2;
        }

    }
}

//Method - iterate over both and move the pointers to a single list

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);

const sol = new Solution ();
console.log(sol.mergeTwoLists(head1,head2));
