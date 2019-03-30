function printLinkedList(head) {
    let { data, next } = head;
    let headPointer = next;
    let storeData = [data];
    let numberOfElements = 1;

    while (headPointer) {
        storeData.push(headPointer.data);
        headPointer = headPointer.next;
        numberOfElements++;
    }

    console.log(storeData.join("\n"));
}

/*

LINKS

Problem
https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

Submission
https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/submissions/code/103480571

Profile
https://www.hackerrank.com/mirantrix

*/
