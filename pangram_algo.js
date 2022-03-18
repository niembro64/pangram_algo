const isPangram = (str) => {
  if (str.length == 0) {
    return false;
  }
  str = str.toUpperCase();

  var charChecker = [];
  for (var i = 0; i < 26; i++) {
    charChecker[i] = 0;
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      charChecker[str.charCodeAt(i) - "A".charCodeAt(0)] += 1;
  }
  p(charChecker);

  for (var i = 0; i < charChecker.length; i++) {
    if (charChecker[i] == 0) {
      return false;
    }
  }

  return true;
};
const isPerfectPangram = (str) => {
  if (str.length == 0) {
    return false;
  }
  str = str.toUpperCase();

  var charChecker = [];
  for (var i = 0; i < 26; i++) {
    charChecker[i] = 0;
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      charChecker[str.charCodeAt(i) - "A".charCodeAt(0)] += 1;
    }
  }
  p(charChecker);

  for (var i = 0; i < charChecker.length; i++) {
    if (charChecker[i] == 0 || charChecker[i] > 1) {
      return false;
    }
  }

  return true;
};

const p = (a) => {
  console.log(a);
};

s0 = "abcdefghijklmnopqrstuvwxyz";
s1 = "aghijklmnopqrstuvwxyz";
s2 = "aabcdefghijklmnopqrstuvwxyz";
s3 = "aabcdefghijklmnopqrstuvwxyzyz";
s4 = "";
s5 = "b";

a = [s0, s1, s2, s3, s4, s5];
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
  console.log(isPangram(a[i]) ? "is YES" : "is NO");
  console.log(isPerfectPangram(a[i]) ? "perf YES" : "perf NO");
  p("_______________________________");
}
