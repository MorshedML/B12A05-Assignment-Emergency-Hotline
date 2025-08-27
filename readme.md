<!-- Answer 1 -->

<!-- Difference between getElementById , getElementsByClassName , querySelector and querySelectorAll -->

1.  getElementById  => 

getElementById এর মধ্যে HTML এর মধ্যে id দেওয়া যে কোনো একটা Element এর select বা নির্বাচন করা যাই

যেমনঃ 
      document.getElementById(IDName);


2.  getElementsByClassName  =>

getElementsByClassName এর মধ্যে HTML এর নিদিষ্ট class Name এর সকল element কে select বা নির্বাচন করা যাই 

যেমনঃ
      document.getElementsByClassName(ClassName);

3.  querySelector =>

querySelector এর মধ্যে Css Selector এর মধ্যে প্রথমে যে element টা পাবে সেই element টাকে select বা নির্বাচন করবে।

যেমনঃ

      document.querySelector('.ClassName');



4.  querySelectorAll  =>

querySelectorAll এই Css Selector এর মধ্যে যে সব Class Name same থাকবে সব গুলোর element কে select বা নির্বাচন করবে।

যেমনঃ 

      document.querySelectorAll(".ClassName");



<!-- Answer 2 -->

<!-- create and insert a new element into the DOM -->

প্রথমে একটি নতুন element create করতে হবে 

যেমনঃ document.createElement('li');


element এর মধ্যে content গুলো যোগত করতে হবে 

document.createElement('li').innerText = 'Hello world';



DOM এর মধ্যে element গুলো insert করতে হবে 

element insert করতে ব্যবহার করা যেতে পারে appendChild।


এই ভাবে reate and insert a new element into the DOM করা যাই।





<!-- Answer 3 -->

<!-- Event Bubbling and how does it work -->

Event Bubbling বলতে DOM Event handling এর একটি behavior যেখানে একটি event এর নিচের element থেকে উপরের element পর্যন্ত উঠতে থাকে। 

যখন child element এ event trigger হয় তখন সেই event প্রথমে সেই child element এ ঘটে এরপর পর তার parent এরপর parent এর parent অথাৎ grandparent পযন্ত যাই এবং সবশেষ document এ গিয়ে শেষ হয়



<!-- Answer 4 -->

<!-- What is Event Delegation in JavaScript? Why is it useful? -->

Event Delegation child element গুলোকে আলাদা আলাদা event listener না দিয়ে parent element এ একবারে event handle করা হয়। যখন child elements এ event trigger হয় তখন সেটা parent element handle কর।



<!-- Answer 5 -->

<!-- What is the difference between preventDefault() and stopPropagation() methods? -->

1.  preventDefault()  =>

Event এর default behavior off করে দেই।

যেমনঃ

form submission off করা 

page Navigate off করা ইত্যাদি।



2.  stopPropagation() =>

Event parent or ancestor elements এ  পৌছাবে না। অথাৎ DOM traversal বন্ধ করে 

