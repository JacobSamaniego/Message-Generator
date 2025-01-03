const nouns = ['Lava is', 'New York is', 'Dogs are', 'Cats are', 'The ocean is', 'Space is', 'Earth is', 'Billionares are', 'Fruit is']
const adjectives = ['green', 'super', 'blue','red', 'big', 'small', 'silly', 'special']
const other = ['aliens.', 'and tall.', 'and mean.', 'and nice.', 'fish.', 'warriors.']

const fakeFunFacts = () => {
    const randNoun = Math.floor(Math.random() * (nouns.length + 1))
    const randAdjective = Math.floor(Math.random() * (adjectives.length + 1))
    const randOther = Math.floor(Math.random() * (other.length + 1))

    return `Fun Fact: ${nouns[randNoun]} ${adjectives[randAdjective]} ${other[randOther]}`

}

console.log(fakeFunFacts())