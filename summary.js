var tableLength = 12;
var tourDestinations = ['Dhaka', 'Ctg', 'Khulna', 'Barisal'];
//position 0,1,2,3 kore barbe

khulnaPosition = tourDestinations.indexOf('Khulna');
console.log(khulnaPosition);

var fourthDestination = tourDestinations[3];
console.log(fourthDestination);

tourDestinations[1] = 'Srilanka';
console.log(tourDestinations);

tourDestinations.push('london');
console.log(tourDestinations);

tourDestinations.pop();
console.log(tourDestinations);

if (tourDestinations[1] == 'Dhaka') {
    console.log('Pahar dekhbo');
}
else if (tourDestinations[1] == 'china') {
    console.log('jabo na');
}
else if (tourDestinations.length == 4) {
    console.log('Onk ghurbo');
}
else {
    console.log('kothao jabo');
}
//else ta na dileo hbe

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('dim khabo');
}
// <= try korlam

// if (eggPrice >= myBudget) {
//     console.log('Lebu khabo');
// }

// >= try korlam

//2 ta kaj

প্রাকটিস চ্যালেঞ্জ -১:  

ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছো। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো.আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে ?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A +.

 

প্রাকটিস প্রব্লেম -২: 

তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

