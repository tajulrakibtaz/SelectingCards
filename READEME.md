## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANSWER : get Element by Id :- finds element by id and returns it .
get elements by class name :- finds elements by id and returns like an array if so the elements are multiple.
query selector : returns the element it called ny #(for id) or . ( class) .
query selector all : same work as query selector .But it counsts all the meterials and returns like an array if there are multiple .


### 2. How do you create and insert a new element into the DOM?

Answer : 
1. Create element 
const somethingGot = document.createElement('li');
2.add something 
something.innerText = input.value;
3.appand 
list.appand(something);
### 3. What is Event Bubbling? And how does it work?

Answer : When i click a part button at that moment button got the target element -> get the parent ->get the grand parent -> get the HTML -> get the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer : this is where you use a single event .listner to the parent and then it works for all the parent and then it works for all the child . It helps to redusing the extra codes .

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer : Prevent Default() :- stops the Natural work of the event .
stop Propagation() :- Stops the Bubbling .







