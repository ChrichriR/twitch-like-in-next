import LiveChannelItem from "./LiveChannelItem";
import Live1 from "../public/assets/live/live1.jpeg";
import Live2 from "../public/assets/live/live2.jpeg";
import Live3 from "../public/assets/live/live3.jpeg";
import Live4 from "../public/assets/live/live4.jpeg";
import Live5 from "../public/assets/live/live5.jpeg";
import Live6 from "../public/assets/live/live6.jpeg";
import Live7 from "../public/assets/live/live7.jpeg";
import Live8 from "../public/assets/live/live8.jpeg";
import Live9 from "../public/assets/live/live9.jpeg";
import Live10 from "../public/assets/live/live10.jpeg";

/* eslint-disable react/no-unescaped-entities */
export default function LiveChannels() {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Live Channels</span> we think you'll
        Like
      </h2>
      {/* Container */}
      <div className="grid sm:grid-cols-2 md: grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelItem
          img={Live1}
          profile_img="/assets/profile/Feet2.png"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live2}
          profile_img="/assets/profile/Sheep.png"
          title="Deployable shield commin in clutch"
          user="50ZINT"
          game="Call of Duty: Warzone"
        />
        <LiveChannelItem
          img={Live3}
          profile_img="/assets/profile/Kitty2.png"
          title="VALORANT WITH NIJI AND FRIENDS!..."
          user="baoo"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live4}
          profile_img="/assets/profile/Kitties3.png"
          title="Local Streamer stuck in a cave: sings..."
          user="Jerma985"
          game="One Hand Clapping"
        />
        <LiveChannelItem
          img={Live5}
          profile_img="/assets/profile/Rabbit.png"
          title="BIG Mario Kart session"
          user="Bigpuffer"
          game="Mario Kart 8 Deluxe"
        />
        <LiveChannelItem
          img={Live6}
          profile_img="/assets/profile/Fox.png"
          title="Tripod Man Gains RP | Code: MFAM | @..."
          user="NICKMERCS"
          game="Apex Legends"
        />
        <LiveChannelItem
          img={Live7}
          profile_img="/assets/profile/Feet1.png"
          title="JESUS LOVES YOU!!!"
          user="coletteleclair"
          game="Just Chatting"
        />
        <LiveChannelItem
          img={Live8}
          profile_img="/assets/profile/Rhino.png"
          title="Covert_Muffin teaching Star Wars..."
          user="JamesDoneQuick"
          game="Star Wars: Jedi Knight II - Jedi Outcast"
        />
        <LiveChannelItem
          img={Live9}
          profile_img="/assets/profile/Kitties1.png"
          user="shroud"
          game="The Cycle: Frontier"
        />
        <LiveChannelItem
          img={Live10}
          profile_img="/assets/profile.jpg"
          title="GRILLIN / CHILLEN! Steak / Burgers..."
          user="KennyGoodloe"
          game="Just Chatting"
        />
      </div>
    </div>
  );
}
