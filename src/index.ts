/**
 * Dictionary of shady words
 */
const dictionary = [
  "discord-nitro",
  "free-movie",
  "free-robux",
  "free-steam-games",
  "cam-spy",
  "bathroom-spy",
  "not-a-virus",
  "unlimited-4g",
  "free-iphone",
  "free-iphone-12",
  "free-iphone-13",
  "free-iphone-14",
  "free-iphone-15",
  "how-to-get-free-iphone",
  "cheat-codes",
  "harry-potter-2021-mp4",
  "spotify-premium-leak",
  "leaked-photos",
  "leaked-videos",
  "girlfriend-nudes",
  "boyfriend-nudes",
  "cheat-girfriend-tutorial",
  "cheat-boyfriend-tutorial",
  "how-to-cheat-your-girlfriend",
  "how-to-cheat-your-boyfriend",
  "how-to-cheat-your-partner",
  "how-to-cheat-your-spouse",
  "destroy",
  "flat-earth",
  "illuminati",
  "world-war-3",
  "world-war-4",
  "world-end",
  "world-destroy",
  "world-kill",
  "world-kill-2021",
];

/**
 * Generate a shady slug
 * @param expression_count The number of shady expressions to include in the slug
 * @param id_length The length of the ID to append to the slug
 */
function generate(expression_count: number = 2, id_length: number = 5): string {
  // Get expression_count random expression from the dictionary
  const expressions = dictionary
    .sort(() => Math.random() - 0.5)
    .slice(0, expression_count);
  // generate a random string
  const random = Math.random()
    .toString(36)
    .substring(2, id_length + 2);
  // return the result
  return expressions.join("-") + "-" + random;
}

export default generate;
