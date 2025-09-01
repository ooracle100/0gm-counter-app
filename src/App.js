import React, { useState } from "react";

function App() {
  const [twitterHandle, setTwitterHandle] = useState("");
  const [result, setResult] = useState(null);
  const [fact, setFact] = useState(null);

  const YOUR_TWITTER_PROFILE_LINK = "https://twitter.com/itz_tentebo";

  const jokeMessages = [
    (handle, count) => `Whoa @${handle}, ${count} 0gms recorded! 🤫 But shhh... is it real? Keep the mystery alive, share the link and let others see their own count!`,
    (handle, count) => `@${handle}, you've dropped the '0gm' bomb ${count} times! 💥 Or is it all smoke and mirrors? Keep the joke rolling and share the fun!`,
    (handle, count) => `Hey @${handle}, ${count} 0gms? 🎉 Whether fact or fiction, this is your moment! Pass it on and dare others to check theirs!`,
    (handle, count) => `Look at you, @${handle}, with ${count} 0gms! 🤩 Real or not, it’s all about the vibes. Don’t keep the fun to yourself!`,
    (handle, count) => `@${handle}, you've said 0gm ${count} times! 🕵️‍♂️ Detective work says... maybe it’s true, maybe not. Spread the mystery and challenge your friends!`,
  ];

  const ogFacts = [
    "Did you know? 0G Labs is building a modular AI-focused blockchain optimized for scaling AI applications efficiently.",
    "Fun fact: 0G’s Data Availability layer supports enormous AI datasets, enabling decentralized AI training and data sharing.",
    "Here’s a tidbit: 0G Labs is fully EVM compatible, making it easy for developers to build dApps just like on Ethereum.",
    "Cool thing: 0G Compute lets you pay only for what you use, making AI computation ultra cheap and accessible.",
    "0G Labs’ Galileo testnet boosts network speed by 70%, pushing closer to a high-throughput blockchain for AI.",
    "$325M in funding helps 0G Labs build a decentralized AI Operating System for tomorrow’s dApps.",
    "0G Labs combines blockchain, AI, and modularity to enable secure, scalable, and composable Web3 AI ecosystems.",
    "Did you know? 0G’s ecosystem includes AI alignment nodes that keep AI systems efficient and trustworthy.",
    "Which feature of 0G Labs do you think will be the biggest game-changer for adoption?",
  ];

  function getRandomOGMCount() {
    return Math.floor(Math.random() * 100);
  }

  function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!twitterHandle) {
      alert("Please enter your Twitter username without @!");
      return;
    }
    const count = getRandomOGMCount();
    const jokeMsg = getRandomFromArray(jokeMessages)(twitterHandle, count);
    const factMsg = getRandomFromArray(ogFacts);

    setResult(jokeMsg);
    setFact(factMsg);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "3rem auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #6e3cff 0%, #450084 100%)",
        borderRadius: "10px",
        padding: "2rem",
        color: "white",
        minHeight: "80vh",
      }}
    >
      <h1>0gm Counter</h1>

      <img
        src="/0G PANDA.jpeg"
        alt="0G Panda"
        style={{
          width: "100%", // full width of the container
          maxWidth: 600,
          height: "auto",
          margin: "1rem auto",
          display: "block",
          borderRadius: "10px",
        }}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Twitter username without @"
          value={twitterHandle}
          onChange={(e) => setTwitterHandle(e.target.value.replace(/^@/, ""))}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            width: "80%",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            margin: "1rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#450084",
            fontWeight: "bold",
          }}
        >
          Check my 0gms!
        </button>
      </form>
      {result && (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            padding: "1rem",
            marginTop: "2rem",
            borderRadius: "5px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>{result}</p>
          <p style={{ fontStyle: "italic", marginTop: "0.5rem", color: "#ddd" }}>
            {fact}
          </p>
          <a
            href={YOUR_TWITTER_PROFILE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontWeight: "bold" }}
          >
            Go reply to the original tweet here!
          </a>
        </div>
      )}
    </div>
  );
}

export default App;







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [twitterHandle, setTwitterHandle] = useState("");
//   const [result, setResult] = useState(null);

//   const YOUR_TWITTER_PROFILE_LINK = "https://twitter.com/itz_tentebo";

//   function getRandomOGMCount() {
//     return Math.floor(Math.random() * 100);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!twitterHandle) {
//       alert("Please enter your Twitter username!");
//       return;
//     }
//     const count = getRandomOGMCount();
//     setResult(
//       `@${twitterHandle}, you've said 0gm ${count} Times.. haha just kidding, you are better than that😉. Don't spoil the fun, give others the link to check theirs!`
//     );
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "3rem auto", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
//       <h1>0gm Counter</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your Twitter username without @"
//           value={twitterHandle}
//           onChange={(e) => setTwitterHandle(e.target.value.replace(/^@/, ""))}
//           style={{ padding: "0.5rem", fontSize: "1rem", width: "80%" }}
//         />
//         <br />
//         <button type="submit" style={{ margin: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}>
//           Check my 0gms!
//         </button>
//       </form>
//       {result && (
//         <div style={{ backgroundColor: "#f1f1f1", padding: "1rem", marginTop: "2rem", borderRadius: "5px" }}>
//           <p>{result}</p>
//           <a href={YOUR_TWITTER_PROFILE_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#1DA1F2", fontWeight: "bold" }}>
//             Go reply to the original tweet here!
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [twitterHandle, setTwitterHandle] = useState("");
//   const [result, setResult] = useState(null);
//   const [fact, setFact] = useState(null);

//   const YOUR_TWITTER_PROFILE_LINK = "https://twitter.com/itz_tentebo";

//   // Array of jovial random messages with placeholders
//   const jokeMessages = [
//     (handle, count) => `Whoa @${handle}, ${count} 0gms recorded! 🤫 But shhh... is it real? Keep the mystery alive, share the link and let others see their own count!`,
//     (handle, count) => `@${handle}, you've dropped the '0gm' bomb ${count} times! 💥 Or is it all smoke and mirrors? Keep the joke rolling and share the fun!`,
//     (handle, count) => `Hey @${handle}, ${count} 0gms? 🎉 Whether fact or fiction, this is your moment! Pass it on and dare others to check theirs!`,
//     (handle, count) => `Look at you, @${handle}, with ${count} 0gms! 🤩 Real or not, it’s all about the vibes. Don’t keep the fun to yourself!`,
//     (handle, count) => `@${handle}, you've said 0gm ${count} times! 🕵️‍♂️ Detective work says... maybe it’s true, maybe not. Spread the mystery and challenge your friends!`,
//   ];

//   // Array of 0G Labs facts and question
//   const ogFacts = [
//     "Did you know? 0G Labs is building a modular AI-focused blockchain optimized for scaling AI applications efficiently.",
//     "Fun fact: 0G’s Data Availability layer supports enormous AI datasets, enabling decentralized AI training and data sharing.",
//     "Here’s a tidbit: 0G Labs is fully EVM compatible, making it easy for developers to build dApps just like on Ethereum.",
//     "Cool thing: 0G Compute lets you pay only for what you use, making AI computation ultra cheap and accessible.",
//     "0G Labs’ Galileo testnet boosts network speed by 70%, pushing closer to a high-throughput blockchain for AI.",
//     "$325M in funding helps 0G Labs build a decentralized AI Operating System for tomorrow’s dApps.",
//     "0G Labs combines blockchain, AI, and modularity to enable secure, scalable, and composable Web3 AI ecosystems.",
//     "Did you know? 0G’s ecosystem includes AI alignment nodes that keep AI systems efficient and trustworthy.",
//     "Which feature of 0G Labs do you think will be the biggest game-changer for adoption?",
//   ];

//   // Generate random 0gm count
//   function getRandomOGMCount() {
//     return Math.floor(Math.random() * 100);
//   }

//   // Pick a random element from an array
//   function getRandomFromArray(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!twitterHandle) {
//       alert("Please enter your Twitter username without @!");
//       return;
//     }
//     const count = getRandomOGMCount();
//     const jokeMsg = getRandomFromArray(jokeMessages)(twitterHandle, count);
//     const factMsg = getRandomFromArray(ogFacts);

//     setResult(jokeMsg);
//     setFact(factMsg);
//   };

//   return (
//     <div
//       style={{
//         maxWidth: 600,
//         margin: "3rem auto",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h1>0gm Counter</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your Twitter username without @"
//           value={twitterHandle}
//           onChange={(e) => setTwitterHandle(e.target.value.replace(/^@/, ""))}
//           style={{ padding: "0.5rem", fontSize: "1rem", width: "80%" }}
//         />
//         <br />
//         <button
//           type="submit"
//           style={{ margin: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}
//         >
//           Check my 0gms!
//         </button>
//       </form>
//       {result && (
//         <div
//           style={{
//             backgroundColor: "#f1f1f1",
//             padding: "1rem",
//             marginTop: "2rem",
//             borderRadius: "5px",
//           }}
//         >
//           <p style={{ fontWeight: "bold" }}>{result}</p>
//           <p style={{ fontStyle: "italic", marginTop: "0.5rem", color: "#555" }}>
//             {fact}
//           </p>
//           <a
//             href={YOUR_TWITTER_PROFILE_LINK}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#1DA1F2", fontWeight: "bold" }}
//           >
//             Go reply to the original tweet here!
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
