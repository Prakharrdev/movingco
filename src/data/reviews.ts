export interface Review {
  name: string;
  date: string;
  initial: string;
  avatarColor: string;
  stars: number;
  text: string;
  googleProfileLink?: string;
}

export const googleReviewsUrl =
  "https://www.google.com/maps/place/Ascension+Moving+Company+LLC/@45.0204126,-86.266099,9z/data=!4m8!3m7!1s0x401408a8c52c06af:0x334a9d60143b9213!8m2!3d45.0223094!4d-85.606771!9m1!1b1!16s%2Fg%2F11vxhkbzvf?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D";

export const reviews: Review[] = [
  {
    name: "Dottie S.",
    date: "a week ago",
    initial: "D",
    avatarColor: "#4285f4",
    stars: 5,
    text: "There aren't enough superlatives to describe Ascension Moving Co. This crew is so hard working! We've used them for two moves and they are amazing. Kind, fast, courteous...truly wonderful to work with. Highly recommend!"
  },
  {
    name: "Dana W.",
    date: "10 months ago",
    initial: "D",
    avatarColor: "#ea4335",
    stars: 5,
    text: "I hired Ascension Moving Company to move furniture for me and they did an incredible job. A few items were a high level of difficulty and they handled it with no problem. Nice and professional. True pros!"
  },
  {
    name: "Tim S.",
    date: "Local Guide · 11 months ago",
    initial: "T",
    avatarColor: "#9333ea",
    stars: 5,
    text: "Brought a trailer load of furniture up to MI. Conquered the heavy lifting efficiently, professionally, and handled everything as if it were their own furniture and home. Super reliable!"
  },
  {
    name: "Jackie A.",
    date: "11 months ago",
    initial: "J",
    avatarColor: "#0284c7",
    stars: 5,
    text: "With just two days notice, these heroes completely reconfigured my guy's apartment so he could move home safely. Arrived on time, worked hard, and were a joy to be around!"
  },
  {
    name: "Brooke L.",
    date: "2 years ago",
    initial: "B",
    avatarColor: "#7c3aed",
    stars: 5,
    text: "Couldn't be more satisfied with Ascension Moving Company. Communication was clear and prompt, making the process stress-free. Friendly, careful, and efficient. 5 stars!"
  },
  {
    name: "Y L.",
    date: "2 years ago",
    initial: "Y",
    avatarColor: "#0891b2",
    stars: 5,
    text: "Ascension Moving Company is the best!! Josh and his team have a lot of experience and handle your furniture with immense care. Gave great packing advice too!"
  },
  {
    name: "Hunter S.",
    date: "2 years ago",
    initial: "H",
    avatarColor: "#059669",
    stars: 5,
    text: "Excellent people! Josh and Shaun both have gone above and beyond with their quality of work. Fast, fairly priced, and quick to respond. Flawless service."
  },
  {
    name: "Lisa W.",
    date: "2 years ago",
    initial: "L",
    avatarColor: "#d97706",
    stars: 5,
    text: "Ascension recently moved my senior parents and did an amazing job! Showed great patience and kindness with placement decisions. Professional and fun to work with."
  }
];
