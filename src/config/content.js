function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const content = {
  autoTypingStrings: [
    "a Machine learning enthusiast",
    "a Softwere Engineer",
    "a Freelancer",
  ],
  name: "Mozharul Haq",
  age: getAge("1997-1-22"),
  aboutText:
    "Self-motivated and passionate programmer with a Computer Science and Engineering bachelor's degree. I have worked on various projects using React, Next.js, Python, Flutter, C#. I taught my self the basics of Machine Learning and Data Science. I am currently working as a Freelancer. I am always looking for new opportunities to learn and grow.",
  phoneNumber: "+8801765393016",
  email: "mazharul.haq016@gmail.com",
  address: "Kuril Joar Shahara Bazar Road",
  city: "Dhaka, Bangladesh",
  website: "www.blank.com",
  bloodGroup: "A (+ve)",
  freelance: "Available",
};
export default content;
