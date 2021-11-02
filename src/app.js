let possibles = {
  pronoun: [
    "mine",
    "his",
    "you",
    "we",
    "theirs",
    "I",
    "hers",
    "all",
    "somebody"
  ],
  adj: [
    "charming",
    "conniving",
    "conspiratorial",
    "duplicitous",
    "melancholy",
    "brash",
    "reflexive",
    "doting",
    "extemperaneous",
    "vital",
    "dextrous"
  ],
  noun: [
    "aardvark",
    "hippo",
    "gypsy",
    "turtle",
    "whale",
    "streetlight",
    "government",
    "president",
    "congresswoman",
    "emperor",
    "minister",
    "creator",
    "comedian",
    "alcoholic",
    "addict",
    "Lithuanian"
  ]
};
let possible_domains = [];
function domainCreator() {
  for (let i = 0; i < possibles.pronoun.length; i++) {
    for (let j = 0; j < possibles.adj.length; j++) {
      for (let k = 0; k < possibles.noun.length; k++) {
        possible_domains.push(
          " " +
            possibles.pronoun[i] +
            possibles.adj[i] +
            possibles.noun[i] +
            ".com"
        );
      }
    }
  }
}

domainCreator();
document.write(possible_domains);
