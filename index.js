

function writeCards(names, event) {
    const messages = []
    for ( let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
      debugger
   }
   return messages;
 }

 writeCards(["Tom", "Sam", "Joe"], "birthday")

//console.log(writeCards(["Tom", "Sam", "Joe"], "birthday"))
const n = 12
function countDown(n) {
    let count = n;
    while (count > -1 ) {
        console.log(count--)
    }
}